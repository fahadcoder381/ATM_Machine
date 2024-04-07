#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 2233;
console.log("welcome to ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("Pin is crrect , login successfully");
    let operaterAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operaterAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > mybalance) {
            console.log("Insufficient Balance");
        }
        else {
            mybalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log(`you Remaining balance is : ${mybalance}`);
        }
    }
    else if (operaterAns.operation === "check balance") {
        console.log(`you Account balance is : ${mybalance}`);
    }
}
else {
    console.log("pin is Incrrect , Try again");
}
