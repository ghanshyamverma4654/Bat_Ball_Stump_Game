
let min = 0;  //Declaration of minimum value which is floor value for machine's choice 
let max = 3; //Declaration of maximum value which is ceil value for machine's choice 
let machineChoice;

//Declaring a function so machine can choose BAT/BALL/STUMP randomly
function mChoice(min,max){ 
  //This is a variable which will hold a random number between 0 to 3
  let randomInt = Math.floor(Math.random() * (max - min)) + min;
  //On the basis of randomly chosen number machine's choice is decided 
  if (randomInt === 0){
    machineChoice = 'BAT';
  }
  else if (randomInt === 1){
    machineChoice = 'BALL';
  }
  else if (randomInt === 2){
    machineChoice = 'STUMP';
  }
}

// This function will invoke when the BAT button will clicked 
function BAT(){
  document.querySelector('.message0').innerHTML='<h2>You have choose to:</h2> <h1>BAT</h1>';
  
  mChoice(min,max);
  //Comparing machine's choice and User choice 
  if (machineChoice === 'BAT'){
    document.querySelector('.message1').innerHTML='<h2>Machine has choose to:</h2> <h1>BAT</h1>';
    document.querySelector('.result').innerHTML='<h1>TIE</h1>';
  }
  else if(machineChoice === 'BALL'){
    document.querySelector('.message1').innerHTML='<h2>Machine has choose to:</h2> <h1>BALL</h1>';
    document.querySelector('.result').innerHTML='<h3>Hurray!</h3><br><h1>You Won!</h1>';
  }
  else if (machineChoice === 'STUMP'){
    document.querySelector('.message1').innerHTML='<h2>Machine has choose to:</h2> <h1>STUMP</h1>';
    document.querySelector('.result').innerHTML='<h3>You are OUT</h3><br><h1>You loose!</h1>';
  }
}

// This function will invoked when the BALL button will get clicked
function BALL(){
  document.querySelector('.message0').innerHTML='<h2>You have choose to:</h2> <h1>BALL</h1>';

  mChoice(min,max);

  //Comparing machine's choice and User choice 
  if (machineChoice === 'BAT'){
    document.querySelector('.message1').innerHTML='<h2>Machine has choose to:</h2> <h1>BAT</h1>';
    document.querySelector('.result').innerHTML='<h3>Machine hits the boundary</h3><br><h1>You loose!</h1>';
  }
  else if(machineChoice === 'BALL'){
    document.querySelector('.message1').innerHTML='<h2>Machine has choose to:</h2> <h1>BALL</h1>';
    document.querySelector('.result').innerHTML='<h1>TIE</h1>';
  }
  else if (machineChoice === 'STUMP'){
    document.querySelector('.message1').innerHTML='<h2>Machine has choose to:</h2> <h1>STUMP</h1>';
    document.querySelector('.result').innerHTML='<h3>Hurray!</h3><br><h1>You Won!</h1>';
  }
}


// This function will invoked when the STUMP button will get clicked
function STUMP(){
  document.querySelector('.message0').innerHTML='<h2>You have choose to:</h2> <h1>STUMP</h1>';

  mChoice(min,max);

  //Comparing machine's choice and User choice 
  if (machineChoice === 'BAT'){
    document.querySelector('.message1').innerHTML='<h2>Machine has choose to:</h2> <h1>BAT</h1>';
    document.querySelector('.result').innerHTML='<b>Hurray!</b><br><h1>You Won!</h1>';
  }
  else if(machineChoice === 'BALL'){
    document.querySelector('.message1').innerHTML='<h2>Machine has choose to:</h2> <h1>BALL</h1>';
    document.querySelector('.result').innerHTML='<h3>You are OUT</h3><br><h1>You loose!</h>';
  }
  else if (machineChoice === 'STUMP'){
    document.querySelector('.message1').innerHTML='<h2>Machine has choose to:</h2> <h1>STUMP</h1>';
    document.querySelector('.result').innerHTML='<h1>TIE</h1>';
  }
}