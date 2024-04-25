import test from 'tape';

import capitalize from './capitalize';

test('[capitalize]', t => {
  t.equal(
    'Test',
    capitalize('test'),
    'capitalizes first character'
  );

  t.end();
});
