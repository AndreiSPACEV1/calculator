const dispaly = document.getElementById("display");

function appendToDisplay(input) {
  if (dispaly.value === "0") {
    dispaly.value = "";
  }
  dispaly.value += input;
}

function clearDisplay() {
  dispaly.value = "S-a tras apa!";
  const TRAGE = new Audio("trage.mp3");
  TRAGE.play();
  setTimeout(() => (dispaly.value = "0"), 500);
}

function calculate() {
  try{dispaly.value= eval(dispaly.value);}
  catch{
 dispaly.value= "Error";
}
  
}
