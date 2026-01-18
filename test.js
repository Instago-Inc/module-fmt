const t = require('utest@latest');
const fmt = require('fmt@latest');

t.test('yyyymmdd', () => {
  t.expect(fmt.yyyymmdd('2023-12-31')).toBe('20231231');
});

t.test('fmtAmount', () => {
  t.expect(fmt.fmtAmount('12,3')).toBe('12.30');
  t.expect(fmt.fmtAmount('12.345')).toBe('12.35');
});

module.exports = { run: async (opts) => { await t.run(Object.assign({ quiet: true }, opts)); t.reset(); } };
