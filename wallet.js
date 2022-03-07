"use strict";

const walletCash = 135.00;


//contains and receives cash for ATM deposit and withdraw functions respectively

function takeWallet(takeCash){
    console.log(`You have $${walletCash} in your wallet. How much cash are you going to deposit?`);
        cashAmtOut = parseInt(prompt());
        if (cashAmtOut > walletCash){
            console.log(`How are you going to deposit money you don't have? Be real, dude!`);
        }else{
            walletCash = walletCash - cashAmtOut;
            walletBalance();
        }
};

function putWallet(putCash){
    depAmt = parseInt(prompt());
        account.balance = account.balance + depAmt; 
        console.log(`New Balance = ${account.balance}`);   
        walletBalance(); 
};

function walletBalance(){
    console.log(`Now you have $${walletCash} in your wallet.`)
}

module.exports.cashIn = putWallet;
module.exports.cashOut = takeWallet;
