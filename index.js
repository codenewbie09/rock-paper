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
    choice = prompt("Enter your choice(rock,paper or scissors)");
    choice = choice.toLowerCase();
    switch (choice){
        case "rock":
        case "paper":
        case "scissors":
            return choice;
            break;
        default:
            return "Enter a valid choice";
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
            humanScore +=0;
            computerChoice +=0;
            console.log(`tie!`)
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
    result = humanScore>computerScore ? "You win the game": "Computer won the game";
    console.log(result);
}

playGame();