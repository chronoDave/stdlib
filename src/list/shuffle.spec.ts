import test from 'tape';

import shuffle from './shuffle';

test('[shuffle] shuffles', t => {
  const x = [1, 2, 3, 4, 5];

  t.notDeepEqual(x, shuffle(x), 'shuffles');

  t.end();
})

test('[shuffle] is unmutable', t => {
  const x = [1, 2, 3, 4, 5];
  const y = shuffle(x);

  t.notDeepEqual(x, y, 'does not mutate');

  t.end();
});

test('[shuffle] does not change size', t => {
  const x = [1, 2, 3, 4, 5];
  const y = shuffle(x);

  t.equal(x.length, y. length, 'does not change size');

  t.end();
});

