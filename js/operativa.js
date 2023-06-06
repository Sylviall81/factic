


fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
  .then(response => response.json())
  .then(data => {
    const uselessFactText = data.text;
    const selectedUselessFactElement = document.getElementById("selected-useless-fact");
    selectedUselessFactElement.textContent = uselessFactText;
  });

  

  const myFavFacts = [];
  
  function saveMyFavoriteFacts(string){
    return myFavFacts.push(string);
  }



  function addFav(){

    const selectedUselessFactElement = document.getElementById("selected-useless-fact");
   let uselessFactText =  selectedUselessFactElement.innerHTML
   console.log(uselessFactText)

   saveMyFavoriteFacts(uselessFactText);

    const favContainer = document.getElementById(favContainer);
    var nuevoParrafo = document.createElement('p')
    nuevoParrafo.setAttribute('.fav-fact');
    favContainer.appendChild(nuevoParrafo);

    for (i=0; i < myFavFacts.length; i++){
    
        nuevoParrafo.innerHTML += myFavFacts[i];
    }
    

  }
