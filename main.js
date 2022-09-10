// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');
let steveBorder = document.getElementById("steve");
let alexBorder = document.getElementById("alex");
let villagerBorder = document.getElementById("villager");


// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;
let character = "Steve";

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', fishBtnClicked);

//Highlight character border for what is chosen
function selectSteve(){
  steveBorder.classList.add("character-img active");
  alexBorder.classList.remove("character-img active");
  villagerBorder.classList.remove("character-img active");
  character = "Steve";
}

function selectAlex(){
  alexBorder.classList.add("active");
  steveBorder.classList.remove("active");
  villagerBorder.classList.remove("active");
  character = "Alex";
}

function selectVillager (){
  villagerBorder.classList.add("active");
  alexBorder.classList.remove("active");
  steveBorder.classList.remove("active");
  character = "Villager";
}

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  // Catch fish based on character
  if (character === 'steve') {
    // STEVE: Cod 70%, Salmon 20%, Tropical 5%, Puffer 5%

    

    catchFish("0.7", "0.9", "0.95");
    
  } else if (character === 'alex') {
    // ALEX: Cod 10%, Salmon 10%, Tropical 30%, Puffer 50%

    catchFish("0.1", "0.2", "0.5");
    
  } else if (character === "villager") {
    //Villager Cod, Tropical, Salmon, and PufferFish all 25%

    catchFish("0.25", "0.50", "0.75");
 
  }
}



function catchFish( num1, num2, num3){
  let randNum = Math.random();
    if (randNum < (num1)){
      numCod++;
      numCodSpan.innerHTML = numCod;
      resultImg.src = 'img/Raw-Cod.png';
    } else if (randNum < (num2) ) {
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      resultImg.src = 'img/Raw-salmon.png';
    } else if (randNum < (num3 ) ) {
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      resultImg.src = 'img/Tropical-Fish.png';
    } else {
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
    resultImg.src = 'img/Pufferfish.png';
    }

}

function updateBorder (){

}

