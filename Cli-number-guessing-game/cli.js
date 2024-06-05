"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
console.log("Wellcome to CLI NUMBER GUESSING GAME");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer_1.default.prompt([{
        name: "GuessedNumber",
        type: "number",
        message: "Enter Your Guess Number (Number Limit from 1 to 5):",
    }]);
if (answer.GuessedNumber === randomNumber) {
    console.log("Congratulation! You Guess The Correct Number");
}
else {
    console.log("Soory You Guess The Wrong Number");
}
