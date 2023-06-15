getUselessFact()

function makeSound(id) {
  let audio = document.getElementById(id);
  audio.play();
}

function pauseSound(id) {
  let audio = document.getElementById(id);
  audio.pause();
}

const arrayFavFacts = [];

let factPlaceHolder = document.getElementById("selected-useless-fact");


function getUselessFact() {
  fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
    .then(response => response.json())
    .then(data => factPlaceHolder.innerHTML = data.text);
}


function getMyFavorites() {
  
  let favoriteFact = document.getElementById('selected-useless-fact').innerText
  console.log(favoriteFact);
  arrayFavFacts.push(favoriteFact);
  let newFavItem = arrayFavFacts[arrayFavFacts.length-1];

  printFavorite(newFavItem);

}


  function printFavorite(string) {
    const favoritesList = document.getElementsByTagName("ul")[0]
  
      let listItem = document.createElement('li');
      listItem.className = 'list-items';
      listItem.innerText = string;
          
          favoritesList.appendChild(listItem);
      }



  


  module.exports = {
  printFavorite, 
  getUselessFact,
  getMyFavorites   
};


