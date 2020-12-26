// show preloader
window.addEventListener("load", function() {
  const loader = document.querySelector(".loader");
  //console.log(loader);
  loader.className += " hidden"; 
})

// receive player's choice
const choices = document.querySelectorAll('.choice');

choices.forEach(choice => choice.addEventListener('click', play));

// receive computer choice
function getComputerChoice() {
  const rand = Math.random();
  if(rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67){
    return 'paper';
  } else {
    return 'scissors';
  }
}

// get game winners
function getWinner(p, c){
  if(p === c) {
    return 'draw';
  } else if (p === 'rock'){
    if (c === 'paper'){
      return 'computer';
  } else {
    return 'player';
  }
  } else if(p === 'paper') {
    if (c === 'scissors'){
      return 'computer';
    } else {
      return 'player';
    } 
  } else if(p === 'scissors') {
    if (c === 'rock'){
      return 'computer';
    } else {
      return 'player';
    }
  }
}
console.log(getWinner());

// game start
function play(e){
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  //console.log(winner,playerChoice, computerChoice);
  showWinner(computerChoice, winner);
}

// show final result in Japanese
function showWinner(computerChoice, winner){

  // translate computer choice into japanese
  let jpComChoice;
  if (computerChoice === 'rock') {
    jpComChoice = 'グー ✊🏻';
  }　else if (computerChoice === 'paper'){
    jpComChoice = 'パー ✋🏻';
  }　else if (computerChoice === 'scissors'){
    jpComChoice = 'チョキ ✌🏻';
  }
  // show computer choice
  document.getElementById('computer').innerHTML = 'コンピューターは ' + jpComChoice;

  // show winner in different color
  let jpWinner;
  if (winner === 'draw') {
    jpWinner = 'あいこでしょ！ 😌';
    document.getElementById('result').innerHTML = `<h1 class="text-draw">${jpWinner}</h1>`;
  } else if (winner === 'player') {
    jpWinner = '勝った! 😆';
    document.getElementById('result').innerHTML = `<h1 class="text-win">${jpWinner}</h1>`;
  } else if (winner === 'computer') {
    jpWinner = '負けた! 😭';
    document.getElementById('result').innerHTML = `<h1 class="text-lose">${jpWinner}</h1>`;
  } 

  modal.style.display = 'block';
}

// clear model
window.addEventListener('click', clearModal);

function clearModal(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}
