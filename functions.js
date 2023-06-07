

let factPlaceHolder = document.getElementById("selected-useless-fact");

fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
  .then(response => response.json())
  .then(data => factPlaceHolder.innerHTML = data.text);
  //.then(data => console.log(data.text));
