/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it ('Verifica se `circle` retorna undefined caso o parâmetro passado não seja um número', () => {
    expect(circle('5')).toBe(undefined)
  });
  it ('Verifica se circle retorna um objeto', () => {
    expect(typeof circle(5)).toBe('object')
  })
  it ('Verifica se circle retorna um objeto com 3 propriedades', () => {
    expect(Object.keys(circle(5)).length).toBe(3)
  })
  it ('Verifica se circle, quando não recebe nenhum parâmetro, retorna undefined.', () => {
    expect(circle()).toBe(undefined)
  })
  it ('Verifica se circle, quando recebe o parâmetro 2 retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2.', () => {
    expect(Object.values(circle(2))).toContain(12.56)
  })
  it ('Verifica se circle, quando recebe o parâmetro 3 retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 3.', () => {
    expect(Object.values(circle(3))).toContain(28.259999999999998)
  })
  it ('Verifica se a função retorna, em um objeto, os dados corretos de um círculo de raio 3', () => {
    expect(circle(3)).toEqual({ radius: 3, area: 28.259999999999998, circumference: 18.84 })
  })
});
