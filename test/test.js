// Import the function you want to test
const { getUselessFact } = require ("./functions");

// aqui la función que deseo probar
const { getUselessFact } = require('./tufuncion');

describe('getUselessFact', () => {
  beforeEach(() => {
    // Clear the factPlaceHolder before each test
    document.body.innerHTML = '<div id="selected-useless-fact"></div>';
  });

  test('should fetch a useless fact and set it in the factPlaceHolder', async () => {
    // Call the function you want to test
    await getUselessFact();

    // Check if the factPlaceHolder contains the correct text
    const factPlaceHolder = document.getElementById('selected-useless-fact');
    expect(factPlaceHolder.innerHTML).toBe('This is a useless fact');
  });
});

