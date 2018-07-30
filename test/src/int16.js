/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Test 16-bit integers, signed.
 * @see https://github.com/rochars/twos-complement-buffer
 */

var TwosComplementBuffer = TwosComplementBuffer || require('../../test/loader.js');
var assert = assert || require('assert');

describe('16-bit integers, signed', function() { 
  var tcb = new TwosComplementBuffer(16, true);

  // zero
  it('pack 0', function() {
    var buffer = [];
    tcb.pack(buffer, 0); // ommit the index
    assert.deepEqual(buffer, [0x00, 0x00]);
  });
  it('unpack 0', function() {
    assert.deepEqual(tcb.unpack([0x00, 0x00]), 0);
  });

  // min
  it('pack -32768', function() {
    var buffer = [];
    tcb.pack(buffer, -32768); // ommit the index
    assert.deepEqual(buffer, [0x00, 0x80]);
  });
  it('unpack -32768', function() {
    assert.deepEqual(tcb.unpack([0x00, 0x80]), -32768);
  });

  // max
  it('pack 32767', function() {
    var buffer = [];
    tcb.pack(buffer, 32767); // ommit the index
    assert.deepEqual(buffer, [0xff, 0x7f]);
  });
  it('unpack 32767', function() {
    assert.deepEqual(tcb.unpack([0xff, 0x7f]), 32767);
  });

  // Overflow
  it('throw error if pack -32769', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, -32769); // ommit the index, ==0
    }, /Overflow/);
  });
  it('throw error if pack 32768', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, 32768); // ommit the index, ==0
    }, /Overflow/);
  });
  it('throw error if pack -Infinity', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, -Infinity); // ommit the index, ==0
    }, /Overflow/);
  });
  it('throw error if pack Infinity', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, Infinity); // ommit the index, ==0
    }, /Overflow/);
  });

  // NaN
  it('throw error if pack NaN', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, NaN); // ommit the index, ==0
    }, /NaN/);
  });
});
