# module/fmt - V8 module

Keep workflow outputs tidy with two lightweight formatting helpers for dates and amounts. This module is designed for small, predictable formatting tasks without extra setup.

Learn more about Instago at https://instago.ai.

## Technical reference

Exports:
- `yyyymmdd(d)`
- `fmtAmount(s)`

Usage:
- `yyyymmdd(d)` returns a UTC date string in `YYYYMMDD` format. If the input is invalid, it falls back to the current UTC date.
- `fmtAmount(s)` normalizes a numeric input to a two-decimal string, stripping non-numeric characters first.

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
