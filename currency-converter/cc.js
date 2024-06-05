"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// defining currencies and their rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.65,
    "PKR": 280,
    //  We can dd more curencies and thier rates here later if needed
};
// let users select the currencies and rate from and to
let user_answer = await inquirer_1.default.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the Currency to Convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "PKR",]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the Currency to Convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "PKR",]
    },
    {
        name: "amount",
        type: "lnput",
        message: "Enter amount to Convert:",
    },
]);
// we use formula to convert currency
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount
console.log(`converted Amount = ${converted_amount}`);
