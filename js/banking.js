
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
    console.log(userNewBalance);
    userBalance.innerText = userNewBalance;

    depositeInput.value = "";

})