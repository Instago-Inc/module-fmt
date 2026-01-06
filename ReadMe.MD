# module/fmt - V8 module

Keep small formatting details out of your workflow steps with two simple helpers for dates and amounts. This module is designed to make everyday outputs more consistent without adding setup overhead.

It fits neatly into the Instago V8 runtime, and you can learn more about the platform at https://instago.ai.

## Technical reference

Exports:
- `yyyymmdd(d)`
- `fmtAmount(s)`

Usage:
- `yyyymmdd(d)` returns a UTC date string in `YYYYMMDD` format. If the input is invalid, it falls back to the current date.
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
