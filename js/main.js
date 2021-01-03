/* preloader start */

window.addEventListener("load", function() {
  const loader = document.querySelector(".loader");

  loader.className += " hidden"; 
})


/* game start */

const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const modal = document.querySelector('.modal');

// get computer choice
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

function play(e){
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  console.log(winner,playerChoice, computerChoice);
  showWinner(winner, computerChoice);
  modal.style.display = 'block';
}

choices.forEach(choice => choice.addEventListener('click', play));

// show final result
function showWinner(winner, computerChoice){
  let jpComChoice;
  //  show computer choice in Japanese
  if (computerChoice === 'rock') {
    jpComChoice = 'グー';
  }　else if (computerChoice === 'paper') {
    jpComChoice = 'パー';
  } else {
    jpComChoice = 'チョキ';
  }
  console.log(jpComChoice);
  // show winner in different color
  if (winner === 'player') {
    result.innerHTML = `
    <h1 class="text-win">勝った! 😆</h1>
    <p>コンピューターは ${jpComChoice}</p>
    `;
  } else if (winner === 'computer') {
    result.innerHTML = `
    <h1 class="text-lose">負けた! 😭</h1>
    <p>コンピューターは ${jpComChoice}</p>
    `;
  } else {
    result.innerHTML = `
    <h1 class="text-draw">あいこ! 😌</h1>
    <p>コンピューターは ${jpComChoice}</p>
    `;
  }  
}


/* game end, clear modal */

function clearModal() { 
    modal.style.display = 'none';
}

modal.addEventListener('click', clearModal);
