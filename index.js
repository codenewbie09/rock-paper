function getComputerChoice(){
    number = Math.floor(Math.random()*3)+1;
    if (number===1){
        return "rock";
    }else if(number===2){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    choice = prompt("Enter your choice (rock,paper or scissors): ");
    choice = choice.toLowerCase();
    switch (choice){
        case "rock":
        case "paper":
        case "scissors":
            return choice;
        default:
            console.log("Invalid choice. Please enter rock, paper, or scissors.");
            return getHumanChoice();
    }
}

function playGame(){
    let computerScore = 0;
    let humanScore = 0;


    function playRound(humanChoice, computerChoice){
        let humanWin;
        humanWin = (humanChoice === "scissors" && computerChoice ==="paper" || humanChoice === "rock" && computerChoice ==="scissors" || humanChoice === "paper" && computerChoice ==="rock");
        if (humanWin){
            humanScore +=1;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        } else if (humanChoice === computerChoice){
            console.log(`It's a tie! You both chose ${humanChoice}.`)
        } else{
            computerScore+=1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }


    for (let i = 0; i< 5;i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(`You chose ${humanSelection}`);
        console.log(`Computer chose ${computerSelection}`)
        playRound(humanSelection , computerSelection);
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    console.log(`Your final Score: ${humanScore}`);
    console.log(`Computer final Score: ${computerScore}`)
    if (humanScore > computerScore){
        console.log("You win the game!");
    } else if (humanScore < computerScore){
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();