"use strict";
const prompt = require('prompt-sync')();
const { balance } = require('./account');
const atm = require('./atm');

//As a developer, I want my index.js file to contain the user menu for interacting with the ATM.

//As a developer, I want to account for and handle bad user input, ensuring that any user input is validated and reobtained if necessary.

//Allow customer to continue using the ATM until choosing to exit.
console.log(`Welcome to Bank of Dev! Please enter your 4-digit PIN:`);
const getPIN = prompt();

let ckPin = atm.valPIN(getPIN);
if (ckPin === true){
    console.log(`Thanks!`);
    chooseTrans();
}
else{
    console.log(`Ooops! Try again!`);
}

function chooseTrans(){
    console.log(`Which transaction would you like to do?
    For Balance Inquiry, enter 1
    For Deposit, enter 2
    For Withdrawal, enter 3
    To exit, enter 4
    `);
    const transType = prompt();
    switch(transType){
        case '1':
            atm.balance();
        break;
        case '2':
            console.log(`How much would you like to deposit?`);
            let depositAmt = prompt();
            atm.deposit(depositAmt);
        break;
        case '3':
            console.log(`How much would you like to withdraw?`);
            let wdAmt = prompt();
            if (wdAmt <= balance){
                atm.withdraw(wdAmt);
            }
            else{
                console.log(`You don't have sufficient balance for that withdrawal. Please enter an amount less than or equal to ${balance}.`);
                let wdAmt = prompt();   
                atm.withdraw(wdAmt);
            }
        break;
        case '4':
            console.log(`Thank you for banking with Bank of Dev! Goodbye!`)
        default:
            console.log(`Invalid Entry`);
            chooseTrans();
        break;
    }
}
