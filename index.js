"use strict";
const prompt = require('prompt-sync')();
const atm = require('./atm');

//As a developer, I want my index.js file to contain the user menu for interacting with the ATM.

//As a developer, I want to account for and handle bad user input, ensuring that any user input is validated and reobtained if necessary.

//Allow customer to continue using the ATM until choosing to exit.
console.log(`Welcome to Bank of Dev!`);

logIn();

function logIn(){
    console.log(`Please enter your 4-digit PIN, or enter 4 to exit.`);
    let getPin = prompt();
        if(getPin === '4'){
            console.log(`Goodbye!`);
        }else{
            let ckPin = atm.valPIN(getPin);
            if (ckPin === true){
            console.log(`Thanks!`);
            chooseTrans();
            }
            else{
            console.log(`Ooops! Try again!`);        
            logIn();
            }
        }
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
            chooseTrans();
        break;
        case '2':            
            atm.deposit();
            chooseTrans();
        break;
        case '3':           
            atm.withdraw();            
            chooseTrans();
        break;
        case '4':
            console.log(`
        Thank you for banking with Bank of Dev! Goodbye!
            
            `);
        break;
        default:
            console.log(`Invalid Entry`);
            chooseTrans("no");
        break;
    }
}
