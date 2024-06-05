"use strict";
//import inquirer and chalk
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
// Display a colorful welcome messages
console.log(chalk_1.default.bold.yellowBright("\n \t\t Welcome To Word Counter"));
console.log("=".repeat(55));
//let users to enter sentence
let answers = await inquirer_1.default.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
//trimming sentences and spliting into words based on spaces
let words = answers.sentence.trim().split(" ");
//Analysing user input sentences
console.log("=".repeat(55));
console.log(chalk_1.default.bold("Sentence Words:"));
console.log(words);
console.log(chalk_1.default.bold(`\n Word Count: ${words.length}`));
console.log("-".repeat(55));
