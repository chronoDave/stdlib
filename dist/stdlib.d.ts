/** Non-mutable Fisher-Yates shuffle */
declare const _default$4: <T>(arr: T[]) => T[];

declare namespace shuffle {
  export { _default$4 as default };
}

/** Returns sum of number list */
declare const _default$3: (arr: number[]) => number;

declare namespace sum {
  export { _default$3 as default };
}

/** Merges two arrays and removes duplicates */
declare const _default$2: <T>(a: T[], b: T[]) => T[];

declare namespace unique {
  export { _default$2 as default };
}

/**
 * Clamps number between min and max inclusive
 */
declare const _default$1: (min: number, max: number, n: number) => number;

declare namespace clamp {
  export { _default$1 as default };
}

/** Capitalizes first character */
declare const _default: (x: string) => string;

declare namespace capitalize {
  export { _default as default };
}

export { capitalize, clamp, shuffle, sum, unique };
