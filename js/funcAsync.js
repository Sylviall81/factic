

/*function getUselessFact(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
          uselessFact = data.text;
          return uselessFact;
    })   
}

async function getUselessFact() {
  const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
  const data = await response.json();
  return data.text;

 async function getUselessFact(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.text;
}
}

// Llamada a la función
getUselessFact()
  .then(text => {
    // Aquí puedes utilizar la variable `text`
    factPlaceHolder.innerHTML = text;
  })
  .catch(error => {
    // Manejar cualquier error que ocurra durante la obtención del dato
    console.error('Error al obtener el dato:', error);
  });


*/

//factPlaceHolder.textContent = async function getUselessFact('https://uselessfacts.jsph.pl/api/v2/facts/random')


//factPlaceHolder.innerHTML = getUselessFact('https://uselessfacts.jsph.pl/api/v2/facts/random')




//TEST
/*async function getUselessFact(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.text;
}

// Ejemplo de uso
getUselessFact('https://uselessfacts.jsph.pl/api/v2/facts/random')
  .then(text => {
    factPlaceHolder.innerHTML = text;
  })
  .catch(error => {
    console.error('Error al obtener el dato:', error);
  });

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
});*/


async function fetchData(url, ...keys) {
    const response = await fetch(url);
    const data = await response.json();
    
    const extractedData = {};
  
    keys.forEach(key => {
      if (key in data) {
        extractedData[key] = data[key];
      }
    });
  
    return extractedData;
  }
  