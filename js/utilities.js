function addBalanceTotalCalculate(id) {
    const totalCalculate = document.getElementById(id);
    const balanceNumber = parseFloat(totalCalculate.value);
    return balanceNumber;
}

function savingsFunction(id) {
    const save = document.getElementById(id);
    const saveNumber = parseFloat(save.value)
    return saveNumber;
}
function searchHistoryBalance(id) {
    const historyBalance = document.getElementById(id);
    const historyBalanceNumber = parseFloat(historyBalance.innerText);
    return historyBalanceNumber;
}