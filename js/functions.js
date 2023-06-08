
const arrayFavFacts = [];

let factPlaceHolder = document.getElementById("selected-useless-fact");

let getUselessFact = fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
  .then(response => response.json())
  .then(data => factPlaceHolder.innerHTML = data.text);
  
  //.then(data => console.log(data.text));



  function makeSound(id) {
  let audio = document.getElementById(id);
  audio.play();
}
function pauseSound(id){
  let audio = document.getElementById(id);
  audio.pause();
}

function nextFact(){
  return getUselessFact;
};

function getMyFavorites(){
  let favoriteFact = document.getElementById('selected-useless-fact').innerText
  console.log(favoriteFact);
  arrayFavFacts.push(favoriteFact); 
  console.log (arrayFavFacts);
}





