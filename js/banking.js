// new deposite by a user -------------------
function getInputValue(inputId) {
    const Input = document.getElementById(inputId)
    const inputAmount = parseFloat(Input.value);
    Input.value = "";
    return inputAmount;

}
function updateTotal(id, amount) {
    const depositeTotal = document.getElementById(id);
    const totalDepositeValue = parseFloat(depositeTotal.innerText);
    const newAmount = totalDepositeValue + amount;
    return newAmount;
}


// Deposite button handels *************
document.getElementById("diposite-button").addEventListener('click', function () {
    // deposite functions***********************
    const depositAmount = getInputValue("deposit-amount");

    // user's current deposite 
    /*
     const depositeTotal = document.getElementById("total-diposite");
    const totalDepositeValue = parseFloat(depositeTotal.innerText);
    const newAmount = totalDepositeValue + depositAmount;
     */
    const depositeTotal = document.getElementById("total-diposite")
    const newAmount = updateTotal("total-diposite", depositAmount);
    depositeTotal.innerText = newAmount;

    // balnace function ********************

    const userBalance = document.getElementById("user-balance")
    const totalBalancText = userBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalancText);
    const userNewBalance = depositAmount + totalBalanceValue;
    userBalance.innerText = userNewBalance;
})

// withdraw button handel 
document.getElementById("withdraw-button").addEventListener('click', function () {
    //    withdraw balance come 
    const withdarwInputValue = getInputValue("withdraw-amount");
    const newTotalWithdarw = updateTotal("total-withdaw", withdarwInputValue);
    const withdrawTotal = document.getElementById("total-withdaw")
    withdrawTotal.innerText = newTotalWithdarw;

    // balance update *******************
    const currentBalance = document.getElementById("user-balance");
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceValue = parseFloat(currentBalanceText);

    const newBalance = currentBalanceValue - withdarwInputValue;
    currentBalance.innerHTML = newBalance;


    console.log(currentBalanceValue)
})