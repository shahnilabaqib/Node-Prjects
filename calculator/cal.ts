import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter your first Number", type: "number", name:"firstNumber"},
{message: "Enter your second  Number", type: "number", name:"secondNumber"},
{message: "Select one of the operator to perform function", type: "list", name:"operator",
    choices: ["Addition","Subtraction","Multiplication","Division"]},]);
//conditional statement
if (answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "Subtraction"){  
        console.log(answer.firstNumber + answer.secondNumber);
    }else if (answer.operator === "Multiplication"){  
        console.log(answer.firstNumber + answer.secondNumber);
    }else if (answer.operator === "Division"){  
        console.log(answer.firstNumber + answer.secondNumber);
    
    };
   