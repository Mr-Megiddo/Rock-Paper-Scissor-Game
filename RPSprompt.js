// wannaPlay()
// function wannaPlay(){
//   let wannaPlay = prompt("wanna play rock paper scissors? (Yes/No)").toLowerCase().trim()
//     if(wannaPlay === "yes"){
//       alert("let's play")
//       playGame();
//     }else{
//       alert("Bye Bye")
//     }
// }

// function playGame(){
//   let computerChoice;
//   let myMove;
//   let computerMove;
//   let result;
//   myMove = prompt("Rock / Paper / Scissors").toLowerCase().trim();
//   computerChoice = Math.floor(Math.random()*3);

//   computerChoice === 0 ? computerMove="Rock"
//   : computerChoice === 1 ? computerMove = "Paper"
//   : computerMove = "Scissors"

//   console.log(myMove);
//   console.log(computerMove);

//   if(myMove === "scissors"){
//     computerMove === "Scissors" ? result="Tied"
//     : computerMove === "Rock" ? result="You lost"
//     : result = "You win"
//   }
//   else if(myMove === "rock"){
//     computerMove === "Rock" ? result="Tied"
//     :computerMove === "Paper" ? result="You Lost"
//     : result = "You win"
//   }
//   else if(myMove === "paper"){
//     computerMove === "Paper" ? result="Tied"
//     :computerMove === "Scissors" ? result="You Lost"
//     : result = "You win"
//   }
//   else{
//     alert("Wrong selection")
//     playAgain();
//   }

//   alert(`you pick ${myMove} ,computer pick ${computerMove} ,${result}`)
//   playAgain()
// }

// function playAgain(){
//   let playAgain = prompt("Do you want to play again (yes/no)").toLowerCase().trim()
//   if (playAgain === "yes"){
//     playGame()
//   }else{
//     alert("Bye...")
//   }
// }

