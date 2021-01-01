// // preloader start
window.addEventListener("load", function() {
  const loader = document.querySelector(".loader");
  //console.log(loader);
  loader.className += " hidden"; 
})
// preloader end

// game start
// set dom element
const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const modal = document.querySelector('.modal');

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

function play(e){
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  console.log(winner,playerChoice, computerChoice);
  showWinner(winner, computerChoice);
  modal.style.display = 'block';
  // console.log(showWinner(winner, computerChoice));
}

// show final result in Japanese
function showWinner(winner, computerChoice){
  let jpComChoice;
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
    <h1 class="text-draw">あいこ! 😆</h1>
    <p>コンピューターは ${jpComChoice}</p>
    `;
  }  
}

// click and play again
function clearModal(e) { 
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}


choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
