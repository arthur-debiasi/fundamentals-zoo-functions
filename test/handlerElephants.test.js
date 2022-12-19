const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants:', () => {
  it('1 - Se não for passado um parâmetro para a função, retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('2 - Se o parâmetro passado for não for do tipo string, a função retorna a mensagem `Parâmetro inválido, é necessário uma string`.', () => {
    const notStringMsg = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(1)).toBe(notStringMsg);
    expect(handlerElephants(true)).toBe(notStringMsg);
  });
  it('3 - Para o argumento `count`, a função deve retornar o número inteiro 4.', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('4 - Para o argumento `names`, a função deve retornar um array de nomes que possui o nome Jefferson.', () => {
    expect(handlerElephants('names').includes('Jefferson')).toBeTruthy();
  });
  it('5 - Para o argumento `averageAge`, a função deve retornar um número próximo a 10.5.', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('6 - Para o argumento `location`, a função deve retornar a string `NW`.', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('7 - Para o argumento `popularity`, a função deve retornar um número igual ou maior a 5.', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('8 - Para o argumento `availability`, a função deve retornar um array de dias da semana que não contém Monday.', () => {
    expect(handlerElephants('availability').includes('Monday')).toBeFalsy();
  });
  it('9 - Para o argumento `bisonho`, ou para qualquer outro argumento desconhecido, a função deve retornar null', () => {
    expect(handlerElephants('bisonho')).toBe(null);
  });
});
