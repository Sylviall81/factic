const nock = require('nock');

// aqui la función que deseo probar
const { getUselessFact } = require('./tufuncion');

// aqui la simulación de la respuesta de la API
const mockResponse = { text: 'This is a useless fact' };
nock('https://uselessfacts.jsph.pl')
  .get('/api/v2/facts/random')
  .reply(200, mockResponse);

// aqui la Ejecucion de la prueba
test('Obtener un hecho inútil', async () => {
  // aqui Llamo a la función que deseo probar
  await getUselessFact();

  // aqui Realizo las aserciones
  const factPlaceHolder = document.getElementById('selected-useless-fact');
  expect(factPlaceHolder.innerHTML).toBe(mockResponse.text);
});
