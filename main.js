import inquirer from "inquirer";
import { sum } from "./Operations/add.js";
import { less } from "./Operations/less.js";
import { division } from "./Operations/divid.js";
import { multiply } from "./Operations/multiply.js";
let answer = await inquirer.prompt([
    {
        name: "num1",
        types: "number",
        message: "Enter your first Digit:"
    },
    {
        name: "num2",
        types: "number",
        message: "Enter your second Digit:"
    },
    {
        name: "Operator",
        type: "list",
        choices: ["+", "-", "*", "/"],
        message: "Select your Operator:"
    },
]);
//console.log(answer);
if (answer.Operator === "+") {
    let result = sum(answer.num1, answer.num2);
    console.log(result);
}
else if (answer.Operator === "-") {
    let result = less(answer.num1, answer.num2);
    console.log(result);
}
else if (answer.Operator === "*") {
    let result = multiply(answer.num1, answer.num2);
    console.log(result);
}
else {
    let result = division(answer.num1, answer.num2);
    console.log(result);
}
