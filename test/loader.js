/**
 * Copyright (c) 2018-2019 Rafael da Silva Rocha.
 * https://github.com/rochars/twos-complement-buffer
 *
 */

let TwosComplementBuffer;

// Load the class from the UMD bundle
if (process.argv[3] == '--umd') {
	console.log('umd tests');
	TwosComplementBuffer = require(
		'../dist/twos-complement-buffer.js').TwosComplementBuffer;

// Load the class from the source file
} else {
	console.log('source tests');
	require = require("esm")(module);
	global.module = module;
	TwosComplementBuffer = require(
		'../index.js').TwosComplementBuffer;
}

module.exports = TwosComplementBuffer;
