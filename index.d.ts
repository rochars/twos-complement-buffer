// Type definitions for twos-complement-buffer 1.0.0
// Project: https://github.com/rochars/twos-complement-buffer
// Definitions by: Rafael da Silva Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/twos-complement-buffer

export = TwosComplementBuffer;

declare module TwosComplementBuffer {

  class TwosComplementBuffer {
    /**
     * @param {number} bits The number of bits used by the integer.
     */
    constructor(bits: number);

    /**
     * The number of bytes used by the number.
     * @type {number}
     */
    bits: number;

    /**
     * The number of bytes used by the number.
     * @type {number}
     */
    bytes: number;

    /**
     * Write one two's complement signed integer to a byte buffer.
     * @param {!Uint8Array|!Array<number>} buffer An array of bytes.
     * @param {number} num The number.
     * @param {number=} index The index being written in the byte buffer.
     * @return {number} The next index to write on the byte buffer.
     * @throws {TypeError} If num is NaN.
     * @throws {RangeError} On overflow.
     */
    pack(buffer: Uint8Array|number[], num: number, index?: number): number;

    /**
     * Read one two's complement signed integer from a byte buffer.
     * @param {!Uint8Array|!Array<number>} buffer An array of bytes.
     * @param {number=} index The index to read.
     * @return {number}
     * @throws {RangeError} On overflow.
     */
    unpack(buffer: Uint8Array|number[], index?: number): number;
  }
}
