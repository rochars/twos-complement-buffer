# CHANGELOG

## 1.0.0 - 2019-12-30
- TwosComplementBuffer class is no longer a default export. Used it like this:
```javascript
const TwosComplementBuffer = require(
	'twos-complement-buffer').TwosComplementBuffer;
```
- Use TypeError for NaN and RangeError for overflows instead of Error
- New package structure:
	* dist file is "./dist/twos-complement-buffer.js", a UMD served as "main"
	* ES6 source is "./index.js", served as "module"
