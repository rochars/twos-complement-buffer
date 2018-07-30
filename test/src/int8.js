/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Test 8-bit integers, signed.
 * @see https://github.com/rochars/twos-complement-buffer
 */

var TwosComplementBuffer = TwosComplementBuffer || require('../../test/loader.js');
var assert = assert || require('assert');

describe('8-bit integers, signed', function() { 
  var tcb = new TwosComplementBuffer(8, true);

  // zero
  it('pack 0', function() {
    var buffer = [];
    tcb.pack(buffer, 0); // ommit the index
    assert.deepEqual(buffer, [0x00]);
  });
  it('unpack 0', function() {
    assert.deepEqual(tcb.unpack([0x00]), 0);
  });

  // 1
  it('pack 1', function() {
    var buffer = [];
    tcb.pack(buffer, 1); // ommit the index
    assert.deepEqual(buffer, [0x01]);
  });
  it('unpack 1', function() {
    assert.deepEqual(tcb.unpack([0x01]), 1);
  });

  // -1
  it('pack -1', function() {
    var buffer = [];
    tcb.pack(buffer, -1); // ommit the index
    assert.deepEqual(buffer, [0xff]);
  });
  it('unpack -1', function() {
    assert.deepEqual(tcb.unpack([0xff]), -1);
  });

  // min
  it('pack -128', function() {
    var buffer = [];
    tcb.pack(buffer, -128); // ommit the index
    assert.deepEqual(buffer, [0x80]);
  });
  it('unpack -128', function() {
    assert.deepEqual(tcb.unpack([0x80]), -128);
  });

  // max
  it('pack 127', function() {
    var buffer = [];
    tcb.pack(buffer, 127); // ommit the index
    assert.deepEqual(buffer, [0x7f]);
  });
  it('unpack 127', function() {
    assert.deepEqual(tcb.unpack([0x7f]), 127);
  });

  // Overflow
  it('throw error if pack -129', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, -129); // ommit the index, ==0
    }, /Overflow/);
  });
  it('throw error if pack 128', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, 128); // ommit the index, ==0
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
