const { getUselessFact, getMyFavorites, printFavorite } = require('../test/functions.test')

/*
// Ejemplo de prueba unitaria con Jest
test('Obtener dato inútil', async () => {
  const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
  const expectedText = 'Dato inútil';

  // Simulamos la respuesta de la llamada a fetch utilizando Jest
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ text: expectedText })
  });

  // Llamamos a la función y verificamos que devuelve el resultado esperado
  const result = await getUselessFact(url);
  expect(result).toBe(expectedText);

  // Verificamos que fetch haya sido llamado con la URL correcta
  expect(global.fetch).toHaveBeenCalledWith(url);
});

*/


test('getUselessFact actualiza factPlaceHolder.innerHTML correctamente', () => {
  // Simular la respuesta de la API con un JSON válido
  const mockData = {
    text: 'Este es un hecho inútil'
  };
  mockResponseOnce(JSON.stringify(mockData));

  // Simular el elemento factPlaceHolder
  const factPlaceHolder = document.createElement('h3');
  factPlaceHolder.innerHTML = '';

  // Llamar a la función
  return getUselessFact().then(() => {
    // Verificar que factPlaceHolder.innerHTML se haya actualizado correctamente
    expect(factPlaceHolder.innerHTML).toBe(mockData.text);
  });
});



describe('getMyFavorites', () => {
  test('agrega el hecho favorito al arrayFavFacts y llama a la función printFavorite', () => {
    // Simular el elemento con el hecho favorito
    const selectedFactElement = document.createElement("h3");
    selectedFactElement.textContent = 'Este es mi hecho favorito';

    // Simular el array de hechos favoritos
    const arrayFavFacts = [];

    // Simular la función printFavorite
    const printFavorite = jest.fn();

    // Llamar a la función
    getMyFavorites();

    // Verificar que el hecho favorito se haya agregado al arrayFavFacts
    expect(arrayFavFacts).toContain('Este es mi hecho favorito');

    // Verificar que la función printFavorite se haya llamado
    expect(printFavorite).toHaveBeenCalledWith('Este es mi hecho favorito');
  });
});

describe('printFavorite', () => {
  test('agrega un nuevo elemento <li> al elemento "ul"', () => {

    // Crear un elemento simulado con la clase "favorites-list"
    const favoritesList = document.getElementsByTagName('ul');
    favoritesList.className = "favorites-list";

    // Llamar a la función con un string de ejemplo
    printFavorite('Este es un hecho favorito');

    // Verificar que se haya agregado un nuevo elemento <li> al favoritesList
    expect(favoritesList.children.length).toBe(1);
    expect(favoritesList.children[0].tagName).toBe('li');
    expect(favoritesList.children[0].className).toBe('list-items');
    expect(favoritesList.children[0].textContent).toBe('Este es un hecho favorito');
  });
});