document.getElementById("calculate-btn").addEventListener("click", function () {
    const income = addBalanceTotalCalculate("income");
    const softer = addBalanceTotalCalculate("softer");
    const courses = addBalanceTotalCalculate("courses");
    const internet = addBalanceTotalCalculate("internet");
    if (isNaN(income)) {
        alert("Please Provide Shuld be number..!");
        return
    }
    if (isNaN(softer)) {
        alert("Please Provide Shuld be number..!");
        return
    }
    if (isNaN(courses)) {
        alert("Please Provide Shuld be number..!");
        return
    }
    if (isNaN(internet)) {
        alert("Please Provide Shuld be number..!");
        return
    }
    const totalExpenses = softer + courses + internet;
    const total = income - totalExpenses;
    const expensesBalance = document.getElementById("expenses-total");
    expensesBalance.innerText = totalExpenses.toFixed(2)
    const balance = document.getElementById("balance");
    balance.innerText = total.toFixed(2);
    // remove hidden container
    document.getElementById("click-here").classList.remove("hidden");
})

document.getElementById("savings-btn").addEventListener("click", function(){
    const savingsElement = savingsFunction("input-savings");
    const totalBalanceConvert = document.getElementById("balance");
    const balanceNumber = parseFloat(totalBalanceConvert.innerText);
    const savingsBalance = (balanceNumber * savingsElement) / 100;
    if (isNaN(savingsElement)) {
        alert("Please Provide the number..!");
        return
    }
    document.getElementById("savings").innerText = savingsBalance.toFixed(2);
    const remainingBalance = balanceNumber - savingsBalance;
    if (isNaN(savingsElement)) {
        alert("Please Provide the number..!");
        return
    }
    document.getElementById("remaining").innerText = remainingBalance.toFixed(2);
})


