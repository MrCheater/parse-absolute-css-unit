var chai = require('chai');
var expect = chai.expect;
var parseAbsoluteCSSUnit = require('../src/index.js');

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('1in')).to.equal(96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('2.54cm')).to.equal(96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('25.4mm')).to.equal(96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('72pt')).to.equal(96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('6pc')).to.equal(96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('96px')).to.equal(96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('96')).to.equal(96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('-1in')).to.equal(-96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('-2.54cm')).to.equal(-96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('-25.4mm')).to.equal(-96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('-72pt')).to.equal(-96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('-6pc')).to.equal(-96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('-96px')).to.equal(-96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('-96')).to.equal(-96);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit('0')).to.equal(0);
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(function(){parseAbsoluteCSSUnit('hello')}).to.throw(Error, '');
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(function(){parseAbsoluteCSSUnit('a')}).to.throw(Error, '');
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(function(){parseAbsoluteCSSUnit('null')}).to.throw(Error, '');
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(function(){parseAbsoluteCSSUnit('undefined')}).to.throw(Error, '');
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(function(){parseAbsoluteCSSUnit('1.1.1')}).to.throw(Error, '');
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(function(){parseAbsoluteCSSUnit('1.b')}).to.throw(Error, '');
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(function(){parseAbsoluteCSSUnit(null)}).to.throw(Error, '');
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(function(){parseAbsoluteCSSUnit(undefined)}).to.throw(Error, '');
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(function(){parseAbsoluteCSSUnit(NaN)}).to.throw(Error, '');
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(function(){parseAbsoluteCSSUnit(Infinity)}).to.throw(Error, '');
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(function(){parseAbsoluteCSSUnit(-Infinity)}).to.throw(Error, '');
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(function(){parseAbsoluteCSSUnit(true)}).to.throw(Error, '');
});
