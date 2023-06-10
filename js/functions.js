'use strict'

//let uselessFact = "";
//console.log (getUselessFact('https://uselessfacts.jsph.pl/api/v2/facts/random'));

getUselessFact();

function makeSound(id) {
  let audio = document.getElementById(id);
  audio.play();
}

function pauseSound(id) {
  let audio = document.getElementById(id);
  audio.pause();
}



let factPlaceHolder = document.getElementById('selected-useless-fact');

/*function getUselessFact(string) {
  fetch(string)
    .then(response => response.json())
    .then(data => {
          uselessFact = data.text;
          return uselessFact;
    })   
}*/

//factPlaceHolder.innerHTML = getUselessFact('https://uselessfacts.jsph.pl/api/v2/facts/random')

function getUselessFact() {
  fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
  .then(response => response.json())
  .then(data => factPlaceHolder.innerHTML = data.text)
}

function nextFact() {
  getUselessFact()
};

const arrayFavFacts = [];
function getMyFavorites() {

  let favoriteFact = document.getElementById('selected-useless-fact').innerText
  arrayFavFacts.push(favoriteFact);
 
  let newFavItem = arrayFavFacts[arrayFavFacts.length-1];

  printFavorite(newFavItem);
}

  function printFavorite(string) {
    const favoritesList = document.getElementsByTagName("ul")[0]
      let listItem = document.createElement('li');
      listItem.className = 'list-items';
      listItem.textContent = string;
      
      favoritesList.appendChild(listItem);
  }

  
module.exports = {
  printFavorite,
  getMyFavorites,
  getUselessFact
}

