# module/fmt - V8 module

Keep workflow outputs tidy with two lightweight formatting helpers. Use them when you want consistent dates and amounts without extra setup.

For more about the Instago platform, visit https://instago.ai.

## Technical reference

Exports:
- `yyyymmdd(d)`
- `fmtAmount(s)`

Usage:
- `yyyymmdd(d)` returns a UTC date string in `YYYYMMDD` format. Invalid inputs fall back to the current date.
- `fmtAmount(s)` normalizes a numeric input to a two-decimal string, removing non-numeric characters first.

Configuration:
- None.

Examples:
```js
const fmt = require('fmt@latest');

const today = fmt.yyyymmdd(new Date());
const stamp = fmt.yyyymmdd('2025-01-15T08:30:00Z');

const amountA = fmt.fmtAmount('€12,3');
const amountB = fmt.fmtAmount(99);
```
