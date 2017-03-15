var chai = require('chai');
var expect = chai.expect;
var parseAbsoluteCSSUnit = require('../src/index.js');

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit(undefined)).to.equal(undefined);
});

it('function "parseAbsoluteCSSUnit" should return correct value', function () {
    expect(parseAbsoluteCSSUnit(96)).to.equal(96);
});

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
    expect(parseAbsoluteCSSUnit('hello')).to.equal(undefined);
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(parseAbsoluteCSSUnit('a')).to.equal(undefined);
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(parseAbsoluteCSSUnit('null')).to.equal(undefined);
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(parseAbsoluteCSSUnit('undefined')).to.equal(undefined);
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(parseAbsoluteCSSUnit('1.1.1')).to.equal(undefined);
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(parseAbsoluteCSSUnit('1.b')).to.equal(undefined);
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(parseAbsoluteCSSUnit(null)).to.equal(undefined);
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(parseAbsoluteCSSUnit(NaN)).to.equal(undefined);
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(parseAbsoluteCSSUnit(Infinity)).to.equal(undefined);
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(parseAbsoluteCSSUnit(-Infinity)).to.equal(undefined);
});

it('function "parseAbsoluteCSSUnit" should throw error', function () {
    expect(parseAbsoluteCSSUnit(true)).to.equal(undefined);
});
