#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.bold("\n \t Welcome to Project with Ammar - Currency Converter\n"));
const currency = {
    USD: 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 278.45
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter From Currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter To Currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.green("Enter Your Amount")
    }
]);
//This is Dynamacally Method:
let fromAmount = currency[userAnswer.from]; //Exchange Rate
let toAmount = currency[userAnswer.to]; //Exchange Rate
let amount = userAnswer.amount;
//Formula of Conversion
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount; //USD base currency //4
console.log(`Converted_Amount = ${chalk.yellow.bold(convertedAmount.toFixed(2))}`);
