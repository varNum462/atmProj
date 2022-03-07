"use strict";
const prompt = require('prompt-sync')();
const account = require('./account');
const wallet = require('./wallet');
//create functions getBalance, withdraw, deposit, validatePin


function getBalance(){    
    console.log(`Current Balance = ${account.balance}`);    
};

function withdraw(wdAmt){
    console.log(`How much would you like to withdraw?`);
        wdAmt = (prompt());
        if (wdAmt <= account.balance){
            account.balance = account.balance - Number(wdAmt);  
            wallet.pocketMoney = wallet.pocketMoney + Number(wdAmt);
            console.log(`
            New Bank Balance = ${account.balance.toFixed(2)} 
            You have $${wallet.pocketMoney.toFixed(2)} in your wallet. 
            Don't spend it all in one place!
            `);
        }
        else{
            console.log(`You don't have sufficient balance for that withdrawal. Please enter an amount less than or equal to ${account.balance}.`);
            };    
};

function deposit(depAmt){
    console.log(`You have $${wallet.pocketMoney} in your wallet. How much would you like to deposit?`);
        depAmt = (prompt());
        account.balance = account.balance + Number(depAmt); 
        wallet.pocketMoney = wallet.pocketMoney - Number(depAmt); 
        console.log(`
        New Bank Balance = ${account.balance.toFixed(2)}
        You have $${wallet.pocketMoney.toFixed(2)} left in your wallet.

        `);
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