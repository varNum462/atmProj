"use strict";
const prompt = require('prompt-sync')();
const account = require('./account');
//create functions getBalance, withdraw, deposit, validatePin


function getBalance(){    
    console.log(`Current Balance = ${account.balance}`);    
};

function withdraw(wdAmt){
    console.log(`How much would you like to withdraw?`);
        wdAmt = parseInt(prompt());
        if (wdAmt <= account.balance){
            account.balance = account.balance - wdAmt;  
            console.log(`New Balance = ${account.balance}`)
        }
        else{
            console.log(`You don't have sufficient balance for that withdrawal. Please enter an amount less than or equal to ${account.balance}.`);
            };    
};

function deposit(depAmt){
    console.log(`How much would you like to deposit?`);
        depAmt = parseInt(prompt());
        account.balance = account.balance + depAmt; 
        console.log(`New Balance = ${account.balance}`)
};

function validatePin(tryPIN){
    if(tryPIN === account.pin){
        return true;
    }else{
        return false;
       }
};

module.exports.balance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.valPIN = validatePin;