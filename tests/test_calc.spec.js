const assert = require('assert');
const calc = require('../calc');

const soma = calc.soma
const sub = calc.sub
const mul = calc.mul
const div = calc.div


describe('Função de soma', () => {
  it('Deve retornar 2 quando somar 1 e 1', () => {
    assert.equal(soma(1, 1), 2);
  });
  it('Deve retornar -2 quando somar -4 e 2', () => {
    assert.equal(soma(-4, 2), -2);
  });
  it('Deve retornar -4 quando somar -2 e -2', () => {
    assert.equal(soma(-2, -2), -4);
  });
  it("Deve retornar '4a' quando somar 4 e 'a'", () => {
    assert.equal(soma(4, 'a'), '4a');
  });
});

describe('Funçao de subtração', () => {
  it('Deve retornar -2 quando subtrair -2 e 0', () => {
    assert.equal(sub(-2, 0), -2);
  });
  it('Deve retornar 2 quando subtrair 4 e 2', () => {
    assert.equal(sub(4, 2), 2);
  });
  it('Deve retornar 0 quando subtrair 2 e 2', () => {
    assert.equal(sub(2, 2), 0);
  });
  it("Deve retornar NaN quando subtrair 2 de 'a'", () => {
    assert.equal(sub(2, 'a'), NaN);
  });
});

describe('Função de multiplicação', () =>{
  it('Deve retornar 2 quando multiplicar 2 e 1', () =>{
    assert.equal(mul(2, 1), 2);
  });
  it('Deve retornar 0 quando multiplicar 2 e 0', () => {
    assert.equal(mul(2, 0), 0);
  });
  it('Deve retornar 4 quando multiplicar 2 e 2', () => {
    assert.equal(mul(2, 2), 4);
  });
  it("Deve retornar NaN quando multiplicar 2 e 'a'", () => {
    assert.equal(mul(2, 'a'), NaN)
  });
});

describe('Função de divisão', () => {
  it('Deve retonar Infinity quando dividir 2 por 0', () => {
    assert.equal(div(2, 0), Infinity);
  });
  it('Deve retornar 2 quando dividir 2 por 1', () => {
    assert.equal(div(2, 1), 2);
  });
  it('Deve retornar 1 quando dividir 2 por 2', () => {
    assert.equal(div(2, 2), 1);
  });
  it('Deve retornar -1 quando dividir 2 por -2', () => {
    assert(div(2, -2), -1)
  });
  it("Deve retornar NaN quando dividir 2 por 'a'", () => {
    assert.equal(div(2, 'a'), NaN)
  });
});
