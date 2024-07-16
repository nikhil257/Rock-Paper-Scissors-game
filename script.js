let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScoreBoard = document.querySelector('#user-score');
const compScoreBoard = document.querySelector('#comp-score');


const drawGame = ()=>{
    msg.innerText = "Game is Drawn"
    msg.style.backgroundColor = "lightBlue";
}

const gameWinner =(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScoreBoard.innerText = userScore;
        msg.innerText = `You Won , ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "lightGreen";
    }else{
        compScore++;
        compScoreBoard.innerText = compScore;
        msg.innerText = `${compChoice} beats ${userChoice}. Play Again.`;
        msg.style.backgroundColor = "tomato";
    }
}

const getcompChoice = ()=>{
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const playGame = (userChoice) =>{
    const compChoice = getcompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
       let userWin = true;
       if(userChoice === "rock"){
        //scissors,paper
        userWin = compChoice === "paper" ? false : true;
       }else if( userChoice === "paper"){
        //scissors, rock
        userWin = compChoice === "scissors" ? false : true;
       }else if(userChoice === "scissors"){
        //rock, paper
        userWin = compChoice === "rock" ? false :true;
       }
       gameWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
