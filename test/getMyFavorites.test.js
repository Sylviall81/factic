
const { getMyFavorites } = require('../js/functions');
const { load } = require ("../helpers/helpers");
import { JSDOM } from "jsdom"



// Ejemplo de prueba
test('agrega un elemento a arrayFavFacts y llama a la función printFavorite', async () => {
    const dom = await JSDOM.fromFile("index.html");
    global.document = document;
    
 
  
  let { document } = await load("index.html");
  
  // Crea una implementación simulada de la función printFavorite
  const printFavoriteMock = jest.fn();
  global.printFavorite = printFavoriteMock;

  // Llama a la función que quieres probar
  getMyFavorites();

  // Realiza las comprobaciones o aserciones
  expect(printFavoriteMock).toHaveBeenCalledTimes(1);
  expect(printFavoriteMock).toHaveBeenCalledWith('Un hecho inútil');
});




