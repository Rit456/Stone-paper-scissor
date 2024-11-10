let Userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userscorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#comp-score")
const genCompChoice = () => {
    const option = ["rock","paper","scissor"];
    //rock,paper,scissor
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];

};

const drawGame = () => {
    
    msg.innerText = "Game was draw.Play again";
    msg.style.backgroundColor = "Grey";

};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        Userscore++;
        userscorePara.innerText = Userscore;
        
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";

    } else {
        compscore++;
        compScorePara.innerText = compscore;
    
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";


    }
}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //comp choice ->
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

if(userChoice === compChoice) {
    //draw game
    drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock") {
        //scissor,paper
        userWin = compChoice === "paper" ? false : true;
        

    } else if(userChoice==="paper") {
        //rock,scissor
        userWin = compChoice === "scissor" ? false : true;
        

    } else {
        //rock,scissor
        userWin === compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});