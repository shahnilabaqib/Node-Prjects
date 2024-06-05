import inquirer from "inquirer";

// initializing balance and pin code

let mybalance = 50000;
let mypin = 1234;

console.log("Welcome to ATM");

let pinanswer = await inquirer.prompt([{
    name:"pin",
    type: "number",
    message:"Enter Your Code:"
}])

if(pinanswer.pin === mypin){
    console.log("Your Code Is Correct Login Successfully!");
    //console.log(`Your Current Balance is ${mybalance}`);
}

let operationAnswer = await inquirer.prompt([{

    name: "operation",
    type: "list",
    message: "Select one operation",
    choices: ["Withdraw Amount", "Check Balance"],
}]);

if (operationAnswer.operation === "Withdraw Amount"){
    let amountAns = await inquirer.prompt ([{
        name: "amount",
        type:"number",
        message:"Enter amount to withdraw:",
    }])
    if(amountAns.amount > mybalance){
        console.log("Insufficiant Balance!");
    }
    else{mybalance -= amountAns.amount
        console.log(`${amountAns.amount} Withdraw Successfully`);
        console.log(`Your Remaing balance is ${mybalance}`);
    }
}
    else if (operationAnswer.operation === "Check Balance"){
        console.log(`Your Account Balance is ${mybalance}`);
    }
    else{
        console.log("Pin is Incorrect Try again!");
    }