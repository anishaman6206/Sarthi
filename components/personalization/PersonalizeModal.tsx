'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { INDIAN_STATES } from '@/lib/data/states';
import { useUserStore } from '@/components/store/useUserStore';
import type { Category, Grade } from '@/lib/data/scholarships';

interface PersonalizeModalProps {
  open: boolean;
  onClose: () => void;
}

interface GradeOption {
  value: Grade;
  label: string;
}

const GRADE_OPTIONS: GradeOption[] = [
  { value: 'class-9', label: 'Class 9' },
  { value: 'class-10', label: 'Class 10' },
  { value: 'class-11', label: 'Class 11' },
  { value: 'class-12', label: 'Class 12' },
  { value: 'graduate', label: 'Graduate' },
];

interface IncomeOption {
  label: string;
  min: number;
  max: number;
}

export type IncomeBracket = IncomeOption;

const INCOME_OPTIONS: IncomeOption[] = [
  { label: 'Under 2.5L', min: 0, max: 250000 },
  { label: '2.5L – 8L', min: 250000, max: 800000 },
  { label: '8L – 15L', min: 800000, max: 1500000 },
  { label: '15L+', min: 1500000, max: Number.MAX_SAFE_INTEGER },
];

const CATEGORY_OPTIONS: Category[] = ['General', 'OBC', 'SC', 'ST', 'EWS'];

const GRADE_LABEL: Record<Grade, string> = {
  'class-9': 'Class 9',
  'class-10': 'Class 10',
  'class-11': 'Class 11',
  'class-12': 'Class 12',
  graduate: 'Graduate',
  postgraduate: 'Postgraduate',
};

export default function PersonalizeModal({ open, onClose }: PersonalizeModalProps) {
  const profile = useUserStore((state) => state.profile);
  const setProfile = useUserStore((state) => state.setProfile);

  const [grade, setGrade] = useState<Grade | null>(profile.grade ?? null);
  const [homeStateName, setHomeStateName] = useState<string | undefined>(profile.homeState);
  const [income, setIncome] = useState<IncomeOption | null>(() => {
    if (profile.familyIncome === undefined) return null;
    return (
      INCOME_OPTIONS.find(
        (opt) =>
          profile.familyIncome !== undefined &&
          profile.familyIncome >= opt.min &&
          profile.familyIncome < opt.max,
      ) ?? null
    );
  });
  const [category, setCategory] = useState<Category | null>(profile.category ?? null);

  const [stateQuery, setStateQuery] = useState<string>('');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // ESC key closes modal
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const onClick = (e: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [dropdownOpen]);

  const filteredStates = useMemo(() => {
    const q = stateQuery.trim().toLowerCase();
    if (!q) return INDIAN_STATES;
    return INDIAN_STATES.filter((s) => s.name.toLowerCase().includes(q));
  }, [stateQuery]);

  const handleSelectState = (name: string): void => {
    setHomeStateName(name);
    setStateQuery('');
    setDropdownOpen(false);
  };

  const handleSubmit = (): void => {
    if (!grade || !homeStateName || !income || !category) return;
    const bracket = {
      min: income.min,
      max: income.max,
      label: income.label,
    };
    const midpoint = (income.min + income.max) / 2;
    setProfile({
      grade,
      homeState: homeStateName,
      familyIncome: midpoint,
      category,
      incomeBracket: bracket,
    });
    onClose();
    if (typeof window !== 'undefined') {
      window.alert("Profile saved! We'll match scholarships and schemes for you.");
    }
  };

  if (!open) return null;

  const inputValue = dropdownOpen
    ? stateQuery
    : (homeStateName ?? '');

  // Render into document.body so the modal escapes any ancestor stacking
  // context (e.g. the roadmap hero's relative + transform from framer-motion).
  const modalContent = (
    <div
      className="fixed inset-0 z-[100] bg-black/50 flex items-start sm:items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="personalize-modal-title"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-glow relative my-auto max-h-[calc(100vh-2rem)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Skip personalization"
          className="absolute top-4 right-4 text-sarthi-ink/60 text-sm hover:text-sarthi-ink"
        >
          Skip
        </button>

        <h2
          id="personalize-modal-title"
          className="font-display text-2xl font-bold text-sarthi-ink"
        >
          <span aria-hidden>✨</span> Tell me about you
        </h2>
        <p className="mt-1 text-sm text-sarthi-ink/70">
          I&apos;ll match scholarships and schemes specifically for your situation.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="mt-6 flex flex-col gap-5"
        >
          {/* Grade */}
          <div>
            <label className="text-sm font-semibold text-sarthi-ink">
              What grade are you in?
            </label>
            <div className="mt-2 flex gap-2 flex-wrap">
              {GRADE_OPTIONS.map((opt) => {
                const active = grade === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setGrade(opt.value)}
                    className={[
                      'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                      active
                        ? 'bg-sarthi-violet text-white'
                        : 'bg-sarthi-cream text-sarthi-ink hover:bg-sarthi-cream/80',
                    ].join(' ')}
                    aria-pressed={active}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* State */}
          <div className="relative" ref={dropdownRef}>
            <label
              htmlFor="state-input"
              className="text-sm font-semibold text-sarthi-ink"
            >
              Which state are you from?
            </label>
            <input
              id="state-input"
              type="text"
              autoComplete="off"
              placeholder="Search your state"
              value={inputValue}
              onFocus={() => {
                setDropdownOpen(true);
                setStateQuery('');
              }}
              onChange={(e) => {
                setStateQuery(e.target.value);
                setDropdownOpen(true);
              }}
              className="mt-2 border border-sarthi-ink/15 rounded-xl px-4 py-3 w-full text-sm text-sarthi-ink focus:outline-none focus:ring-2 focus:ring-sarthi-violet/40"
            />
            {dropdownOpen ? (
              <ul
                role="listbox"
                className="absolute left-0 right-0 bg-white border border-sarthi-ink/10 rounded-xl mt-1 max-h-48 overflow-y-auto shadow-lg z-10"
              >
                {filteredStates.length === 0 ? (
                  <li className="px-4 py-2 text-sm text-sarthi-ink/60">
                    No matches
                  </li>
                ) : (
                  filteredStates.map((s) => (
                    <li key={s.code}>
                      <button
                        type="button"
                        onClick={() => handleSelectState(s.name)}
                        className="w-full text-left px-4 py-2 text-sm text-sarthi-ink hover:bg-sarthi-cream"
                        role="option"
                        aria-selected={homeStateName === s.name}
                      >
                        {s.name}
                      </button>
                    </li>
                  ))
                )}
              </ul>
            ) : null}
          </div>

          {/* Income */}
          <div>
            <label className="text-sm font-semibold text-sarthi-ink">
              Annual family income
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {INCOME_OPTIONS.map((opt) => {
                const active = income?.label === opt.label;
                return (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setIncome(opt)}
                    className={[
                      'rounded-xl border border-sarthi-ink/10 px-3 py-3 text-sm font-semibold text-left transition-colors',
                      active
                        ? 'ring-2 ring-sarthi-violet bg-sarthi-violet/10 text-sarthi-ink'
                        : 'bg-white text-sarthi-ink/80 hover:bg-sarthi-cream',
                    ].join(' ')}
                    aria-pressed={active}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-semibold text-sarthi-ink">
              Category
            </label>
            <div className="mt-2 flex gap-2 flex-wrap">
              {CATEGORY_OPTIONS.map((c) => {
                const active = category === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    className={[
                      'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                      active
                        ? 'bg-sarthi-violet text-white'
                        : 'bg-sarthi-cream text-sarthi-ink hover:bg-sarthi-cream/80',
                    ].join(' ')}
                    aria-pressed={active}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            disabled={!grade || !homeStateName || !income || !category}
            className="bg-sarthi-violet text-white py-3 rounded-xl font-semibold hover:bg-sarthi-violet/90 mt-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Save & see matches
          </button>
        </form>
      </motion.div>
    </div>
  );

  // SSR guard: portal target only exists in the browser
  if (typeof document === 'undefined') return null;
  return createPortal(modalContent, document.body);
}

// Re-export labels so other files can reuse
export { GRADE_LABEL };