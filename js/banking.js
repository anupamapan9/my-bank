// Deposite button handels *************
document.getElementById("diposite-button").addEventListener('click', function () {


    // deposite functions***********************
    // new deposite by a user 

    const depositeInput = document.getElementById("deposit-amount")
    const depositAmount = parseFloat(depositeInput.value);

    // user's current deposite 
    const depositeTotal = document.getElementById("total-diposite");
    const totalDepositeValue = parseFloat(depositeTotal.innerText);

    // after sum deposite 
    const newAmount = totalDepositeValue + depositAmount;
    console.log(newAmount);
    depositeTotal.innerText = newAmount;

    // balnace function ********************

    const userBalance = document.getElementById("user-balance")
    const totalBalance = parseFloat(userBalance.innerText);

    const userNewBalance = depositAmount + totalBalance;
    userBalance.innerText = userNewBalance;
    depositeInput.value = "";
})

// withdraw button handel 
document.getElementById("withdraw-button").addEventListener('click', function () {
    //    withdraw balance come 

    const withdrawTotal = document.getElementById("total-withdaw");
    const totalWithdawValue = parseFloat(withdrawTotal.innerText);

    const withdarwInput = document.getElementById("withdraw-amount");
    const withdarwInputValue = parseFloat(withdarwInput.value);

    const newTotalWithdarw = totalWithdawValue + withdarwInputValue;

    withdrawTotal.innerText = newTotalWithdarw;
    withdarwInput.value = '';

    // balance update *******************
    const currentBalance = document.getElementById("user-balance");
    const currentBalanceValue = parseFloat(currentBalance.innerText);

    const newBalance = currentBalanceValue - withdarwInputValue;
    currentBalance.innerHTML = newBalance;


    console.log(currentBalanceValue)
})