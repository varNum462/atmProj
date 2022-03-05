"use strict";
const prompt = require('prompt-sync')();
const account = require('./account');
const newTrans = require('./index');
const currBalance = account.balance;
//create functions getBalance, withdraw, deposit, validatePin

function getBalance(findBalance){
    console.log(`Current Balance = ${findBalance.toFixed(2)}
    
    Would you like another transaction? Enter Yes or No`);
    let newTrans = prompt();
    if(newTrans === "Yes"){
        
    }else{ console.log(`Thank you for banking with Bank of Dev! Goodbye!`)}


};

function withdraw(wdAmt){
    let newBalance = Number(currBalance) - Number(wdAmt);
    return getBalance(newBalance);
};

function deposit(depAmt){
    let newBalance = Number(account.balance) + Number(depAmt);
    console.log(`New Balance = ${newBalance.toFixed(2)}`);
    return getBalance(newBalance);    
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