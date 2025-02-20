  const score = JSON.parse(localStorage.getItem("saveScore")) || {
    wins : 0,
    losses : 0,
    ties : 0
  };

  function playGame(a){
    let computerChoice;
    let myMove;
    let computerMove;
    let result;

    myMove = a.toLowerCase();
    computerChoice = Math.floor(Math.random()*3);

    computerChoice === 0 ? computerMove="Rock"
    : computerChoice === 1 ? computerMove = "Paper"
    : computerMove = "Scissors"

    if(myMove === "scissors"){
      computerMove === "Scissors" ? result="Tied"
      : computerMove === "Rock" ? result="You Lost"
      : result = "You win"
    }
    else if(myMove === "rock"){
      computerMove === "Rock" ? result="Tied"
      :computerMove === "Paper" ? result="You Lost"
      : result = "You win"
    }
    else if(myMove === "paper"){
      computerMove === "Paper" ? result="Tied"
      :computerMove === "Scissors" ? result="You Lost"
      : result = "You win"
    }

    const Declare = document.getElementById("result");
    Declare.innerHTML = `<h3>${result}</h3> 
    <h4>You pick ${myMove}</h4> 
    <h4>Computer pick ${computerMove}</h4>`;

    if(result === "You win"){
      score.wins = score.wins += 1;
    }else if(result === "You Lost"){
      score.losses = score.losses += 1;
    }else if(result === 'Tied'){
      score.ties = score.ties += 1;
    }

    const footer = document.getElementById("footer");
    footer.innerHTML = `<p>Wins : ${score.wins} </p> <p>Losses : ${score.losses} </p> <p>Ties : ${score.ties} </p>`;  

    localStorage.setItem("saveScore", JSON.stringify(score));
  }

  function resetScore(){
    localStorage.removeItem("saveScore");
    location.reload();
  }