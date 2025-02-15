// 1. ATM Withdrawal System

function atmWithdrawal(balance, amount, pin, enteredPin){
     if(enteredPin == pin){
        console.log(entered pin successfully);
     }else{
        return "Incorrect pin entered";
     }
    
     if(amount > balance){
        return "Insufficient Balance";
     }

     if((amount % 100) == 0){
        return 'Withdrawal Successful of ${amount} rupees';
     }

}


var balance=10000;
var amount=5000;
var enteredpin=6783;
var pin=6783
console.log(atmWithdrawal(balance, amount, pin, enteredpin));