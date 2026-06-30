/**
 * Indian-rupee number formatters.
 * Uses lakh / crore rather than thousand / million.
 */

const RS = "Rs";

const isFiniteNumber = (value: number | null | undefined): value is number =>
  typeof value === "number" && Number.isFinite(value);

export const formatINR = (amount: number | null | undefined): string => {
  if (!isFiniteNumber(amount)) return "—";

  if (amount >= 10000000) {
    const crores = amount / 10000000;
    return `${RS} ${crores.toFixed(1)} Cr`;
  }

  if (amount >= 100000) {
    const lakhs = amount / 100000;
    const rounded = Math.round(lakhs * 10) / 10;
    const display = Number.isInteger(rounded) ? rounded.toString() : rounded.toFixed(1);
    return `${RS} ${display} L`;
  }

  if (amount >= 1000) {
    return `${RS} ${amount.toLocaleString("en-IN")}`;
  }

  return `${RS} ${amount}`;
};

export const formatINRRange = (
  min: number | null | undefined,
  max: number | null | undefined,
): string => {
  if (!isFiniteNumber(min) || !isFiniteNumber(max)) return "—";
  if (min === max) return formatINR(min);
  return `${formatINR(min)} to ${formatINR(max)}`;
};

export const formatDuration = (months: number | null | undefined): string => {
  if (!isFiniteNumber(months)) return "—";

  if (months >= 12) {
    const years = Math.round((months / 12) * 10) / 10;
    const label = Number.isInteger(years) ? years.toString() : years.toFixed(1);
    return `${label} years`;
  }

  return `${months} months`;
};