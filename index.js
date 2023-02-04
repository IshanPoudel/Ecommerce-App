
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceButtons = document.querySelectorAll(".choiceButton");

let player;
let computer;
let result;

choiceButtons.forEach(button => button.addEventListener("click" , () => {

    console.log("I clicked a button");

    player = button.textContent;
    computerTurn();

    playerText.textContent =  player;
    computerText.textContent = computer;
    resultText.textContent = checkWinner(player , computer);

}));

function computerTurn()
{
    //select a random number between 1 and 3. 
    const randNum = Math.floor(Math.random()*3)+1;
    
    switch(randNum)
    {
        case 1: 
          computer = "ROCK";
          break;
        case 2:
            computer="PAPER";
            break;
        case 3:
            computer="SCISSOR";
            break;
    }

}

function checkWinner(player , computer)
{
    if (player==computer)
    {
        return "Draw";
    }
    else if (computer == "ROCK")
    {
        return (player=="PAPER") ? "You Win!": "You Lose!"
    }
    else if (computer == "PAPER")
    {
        return (player=="SCISSORS") ? "You Win!": "You Lose!"
    }
    else if (computer == "SCISSORS")
    {
        return (player=="ROCK") ? "You Win!": "You Lose!"
    }


}