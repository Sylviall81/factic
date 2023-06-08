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
  //.then(data => console.log(data.text));
}


function nextFact() {
  getUselessFact()
};

function getMyFavorites() {
  let favoriteFact = document.getElementById('selected-useless-fact').innerText
  console.log(favoriteFact);
  arrayFavFacts.push(favoriteFact);
  console.log(arrayFavFacts);
  printFavorites(arrayFavFacts);

  function printFavorites(array) {

    /*const scrollableContainer = document.getElementById('scrollable-container');*/
    const favoritesList = document.getElementsByClassName("favorites-list");
    //const favoritesItems = document.getElementsByClassName("list-items");

    for (let i = 0; i < array.length; i++) {
      let index = i;
  
      let listItem = document.createElement('li');
      listItem.className = 'list-items';
      listItem.innerText = array[index];
      //listItem.textContent = array[index];

      listItem.appendChild(favoritesList);
    }




  }


}