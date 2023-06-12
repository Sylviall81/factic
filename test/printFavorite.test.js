

const { load } = require ("../helpers/helpers");
const { printFavorite } = require('../js/functions');


// Ejemplo de prueba
test('agrega un elemento a la lista de favoritos', async () => {
  
  let { document } = await load("index.html");
  
  //global.document = dom.window.document;

  // Llama a la función que quieres probar
  printFavorite('Ejemplo de favorito');

  // Realiza las comprobaciones o aserciones
  const favoritesList = document.getElementsByTagName('ul')[0];
  const listItem = favoritesList.querySelector('.list-items');
  expect(listItem).not.toBeNull();
  expect(listItem.textContent).toBe('Ejemplo de favorito');
});
