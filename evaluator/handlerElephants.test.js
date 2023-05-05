const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Se ao passar COUNT na função retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Se ao passar NAMES o array inclui o nome Jeferson', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Se ao passar averageAge retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toStrictEqual(10.5);
  });
  it('Se ao passar LOCATION deve retornar a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Se ao passar POPULARITY deve retornar um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Se ao passar AVAILABILITY deve retornar um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Se ao não passar argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Passando por argumento um objeto vazio deve retornar uma mensagem de erro', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('teste')).toBeNull();
  });
});
