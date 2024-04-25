/**
 * Clamps number between min and max inclusive
 */
export default (min: number, max: number, n: number) =>
  Math.min(Math.max(n, min), max);
