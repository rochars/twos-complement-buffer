/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Test 32-bit integers, signed.
 * @see https://github.com/rochars/twos-complement-buffer
 */

var TwosComplementBuffer = TwosComplementBuffer || require('../../test/loader.js');
var assert = assert || require('assert');

describe('32-bit integers, signed', function() { 
  var tcb = new TwosComplementBuffer(32, true);

  // zero
  it('pack 0', function() {
    var buffer = [];
    tcb.pack(buffer, 0); // ommit the index
    assert.deepEqual(buffer, [0x00, 0x00, 0x00, 0x00]);
  });
  it('unpack 0', function() {
    assert.deepEqual(tcb.unpack([0x00, 0x00, 0x00, 0x00]), 0);
  });

  // min
  it('pack -2147483648', function() {
    var buffer = [];
    tcb.pack(buffer, -2147483648); // ommit the index
    assert.deepEqual(buffer, [0x00, 0x00, 0x00, 0x80]);
  });
  it('unpack -2147483648', function() {
    assert.deepEqual(tcb.unpack([0x00, 0x00, 0x00, 0x80]), -2147483648);
  });

  // max
  it('pack 2147483647', function() {
    var buffer = [];
    tcb.pack(buffer, 2147483647); // ommit the index
    assert.deepEqual(buffer, [0xff, 0xff, 0xff, 0x7f]);
  });
  it('unpack 2147483647', function() {
    assert.deepEqual(tcb.unpack([0xff, 0xff, 0xff, 0x7f]), 2147483647);
  });

  // Overflow
  it('throw error if pack -2147483649', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, -2147483649); // ommit the index, ==0
    }, RangeError);
  });
  it('throw error if pack 2147483648', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, 2147483648); // ommit the index, ==0
    }, RangeError);
  });
  it('throw error if pack -Infinity', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, -Infinity); // ommit the index, ==0
    }, RangeError);
  });
  it('throw error if pack Infinity', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, Infinity); // ommit the index, ==0
    }, RangeError);
  });

  // NaN
  it('throw error if pack NaN', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, NaN); // ommit the index, ==0
    }, TypeError);
  });
});
