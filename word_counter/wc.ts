//import inquirer and chalk

import inquirer from "inquirer";
import chalk from "chalk";

// Display a colorful welcome messages

console.log(chalk.bold.yellowBright("\n \t\t Welcome To Word Counter"));
console.log("=".repeat(55));

//let users to enter sentence

let answers = await inquirer.prompt([
    {
        name:"sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
    //trimming sentences and spliting into words based on spaces
    
    let words = answers.sentence.trim().split(" ");

    //Analysing user input sentences

    console.log("=".repeat(55));
    console.log(chalk.bold("Sentence Words:"));
    console.log(words);
    console.log(chalk.bold(`\n Word Count: ${words.length}`));
    console.log("-".repeat(55));






