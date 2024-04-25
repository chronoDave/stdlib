'use strict';

var shuffle = (arr) => {
  const shuffled = arr.slice(0);
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const r = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[r]] = [shuffled[r], shuffled[i]];
  }
  return shuffled;
};

var shuffle$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: shuffle
});

var sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

var sum$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sum
});

var unique = (a, b) => Array.from(/* @__PURE__ */ new Set([...a, ...b]));

var unique$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: unique
});

var clamp = (min, max, n) => Math.min(Math.max(n, min), max);

var clamp$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: clamp
});

var capitalize = (x) => `${x[0].toUpperCase()}${x.slice(1)}`;

var capitalize$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: capitalize
});

exports.capitalize = capitalize$1;
exports.clamp = clamp$1;
exports.shuffle = shuffle$1;
exports.sum = sum$1;
exports.unique = unique$1;
