







// Importa las dependencias necesarias
//const { JSDOM } = require('jsdom');

const { load } = require ("../helpers/helpers");

const fetchMock = require('jest-fetch-mock');
const { getUselessFact } = require('../js/functions');


// Configura el mock de fetch
fetchMock.enableMocks();

// Ejemplo de prueba
test('obtiene un hecho inútil y lo asigna al factPlaceHolder', async () => {

    let { document } = await load("index.html");
  
  // Llama a la función que quieres probar
  await getUselessFact();

  // Realiza las comprobaciones o aserciones
  expect(fetchMock).toHaveBeenCalledWith('https://uselessfacts.jsph.pl/api/v2/facts/random');
  expect(document.getElementById('selected-useless-fact').innerHTML).not.toBe('');
});
