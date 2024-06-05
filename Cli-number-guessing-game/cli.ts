import inquirer from "inquirer";

console.log("Wellcome to CLI NUMBER GUESSING GAME");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([{
    name: "GuessedNumber",
    type: "number",
    message: "Enter Your Guess Number (Number Limit from 1 to 5):",
}]);

if(answer.GuessedNumber === randomNumber){
    console.log("Congratulation! You Guess The Correct Number");
}
else{
    console.log("Soory You Guess The Wrong Number");
}