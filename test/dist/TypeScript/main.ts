/*
 * Copyright (c) 2018-2019 Rafael da Silva Rocha.
 */

/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/twos-complement-buffer
 */

import { TwosComplementBuffer } from '../../../index.js'

let tcb = new TwosComplementBuffer(8);
let buffer = [0, 0];
tcb.pack(buffer, 1, 1);

