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
    depositeTotal.innerText = newAmount;
    return newAmount;
}
function currentBlance() {
    const userBalance = document.getElementById("user-balance")
    const balancText = userBalance.innerText;
    const balanceValue = parseFloat(balancText);
    return balanceValue;
}

function updateBalance(amount, isAdded) {
    const userBalance = document.getElementById("user-balance")
    const balanceValue = currentBlance()
    if (isAdded == true) {
        const userNewBalance = amount + balanceValue;
        userBalance.innerText = userNewBalance;
    } else {
        const userNewBalance = balanceValue - amount;
        userBalance.innerText = userNewBalance;
    }
}


// Deposite button handels *************
document.getElementById("diposite-button").addEventListener('click', function () {
    const depositAmount = getInputValue("deposit-amount");
    if (depositAmount > 0) {
        const newAmount = updateTotal("total-diposite", depositAmount);
        const userBalance = updateBalance(newAmount, true);
    } else {
        alert("Enter some positive number")
    }

})

// withdraw button handel 
document.getElementById("withdraw-button").addEventListener('click', function () {
    //    withdraw balance come 
    const withdarwInputValue = getInputValue("withdraw-amount");
    const balanceValue = currentBlance()
    if (withdarwInputValue > 0 && balanceValue > withdarwInputValue) {
        const newTotalWithdarw = updateTotal("total-withdaw", withdarwInputValue);
        const userBalance = updateBalance(newTotalWithdarw, false);
    }
    if (balanceValue < withdarwInputValue) {
        alert('Fokinni!!! Bank a ato taka nai')
    }
})