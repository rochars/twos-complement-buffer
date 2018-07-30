/**
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/twos-complement-buffer
 *
 */

let TwosComplementBuffer;

// UMD bundle
if (process.argv[3] == '--umd') {
	console.log('umd tests');
	TwosComplementBuffer = require('../twos-complement-buffer.umd.js');

// Source
} else {
	require = require("esm")(module);
	global.module = module;
	console.log('Source tests');
	TwosComplementBuffer = require('../twos-complement-buffer.js').default;
}

module.exports = TwosComplementBuffer;
