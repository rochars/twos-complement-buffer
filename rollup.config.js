/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 * @see https://github.com/rochars/twos-complement-buffer
 */

import closure from 'rollup-plugin-closure-compiler-js';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import fs from 'fs';

// Externs
const externsFile = fs.readFileSync('./externs/twos-complement-buffer.js', 'utf8');

// Legal
const license = '/**\n'+
' * @see https://github.com/rochars/twos-complement-buffer.\n' +
' */\n';

// GCC UMD footer, compatible with old browsers, Node and AMD loaders
const footer = 
  "var TwosComplementBuffer=exports;" +
  "typeof module!=='undefined'?module.exports=exports :" +
  "typeof define==='function'&&define.amd?define(['exports'],exports) :" +
  "typeof global!=='undefined'?global.TwosComplementBuffer=exports:null;";

export default [
  // UMD, minified
  {
    input: 'twos-complement-buffer.js',
    output: [
      {
        file: 'twos-complement-buffer.umd.js',
        format: 'cjs',
        strict: false,
        banner: 'var exports=exports||{};'
      }
    ],
    plugins: [
      commonjs(),
      resolve(),
      closure({
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED',
        warningLevel: 'VERBOSE',
        outputWrapper: license + '%output%' + footer,
        externs: [{src: externsFile + 'exports={};'}]
      })
    ]
  },
];
