"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    { message: "Enter your first Number", type: "number", name: "firstNumber" },
    { message: "Enter your second  Number", type: "number", name: "secondNumber" },
    { message: "Select one of the operator to perform function", type: "list", name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"] },
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber + answer.secondNumber);
}
;
