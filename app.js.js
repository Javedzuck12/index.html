let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#User-score");
const compscorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    //rock paper scissors
    const randIdx=Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText="Game was draw! play again madarchod";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win ! your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
        }else{
        compscore++;
        compscorePara.innerText=compscore;   
        console.log("you lost");
        msg.innerText="you lose asshole"; 
        msg.innerText=`you win ! your ${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame= (userChoice) => {
    console.log("user choice",userChoice);
    //generate machine choice
    const compChoice = genComputerChoice();
    console.log("comp choice",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoice === "paper" ? false: true;
        }else if(userChoice === "paper"){
            //rock,scissors
           userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice ==="rock" ? false : true; 
        }
        showWinner(userWin,userChoice,compChoice);
    }
    


};

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});