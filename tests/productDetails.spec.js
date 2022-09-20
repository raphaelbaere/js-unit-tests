const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  it ('Verifica se o retorno da função é um array', () => {
    expect(productDetails()).toBeInstanceOf(Array);
  });
  it ('Verifica se o array retorna pela função contém dois itens dentro.', () => {
    expect(productDetails()).toHaveLength(2);
  });
  it ('Verifica se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails()[0] && typeof productDetails()[1]).toBe('object')
  })
  it ('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toMatchObject(productDetails('Alcool gel', 'Máscara')[1])
  })
  it ('Verifica se os dois productIds terminam com 123.', () => {
    const string1 = productDetails('Alcool gel', 'Máscara')[0].details.productId
    const string2 = productDetails('Alcool gel', 'Máscara')[1].details.productId
    expect(string1.slice(string1.length - 3) && string2.slice(string2.length - 3)).toBe('123')
  })
});
