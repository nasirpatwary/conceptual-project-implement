let count = 0;
const historyTab = document.getElementById("history-btn")
    historyTab.addEventListener("click", function(){
    count++
    historyTab.classList.add("rounded-r-md", "py-2", "bg-gradient-to-r", "from-blue-500", "to-violet-700","w-40", "text-white")
    document.getElementById("assistant-btn").removeAttribute("class");
    document.getElementById("assistant-container").classList.add("hidden");
    document.getElementById("history-container").classList.remove("hidden")  
     const divContainer = document.createElement("div")
     divContainer.className = "border-2 bg-white border-r-0 border-t-0 border-b-0 border-green-700 rounded border-l-2 pl-2"
     divContainer.innerHTML = `
     <p>Serial: ${count}</p>
     <h4 class="text-lg font-semibold">Income: $<span id="income-history">00</span></h4>
     <p>Expenses: $<span id="expenses-history">00</span></p>
     <p>Balance: $<span id="balance-history">00</span></p>
     `
     const historyMainContainer = document.getElementById("history-main-container")
     historyMainContainer.insertBefore(divContainer, historyMainContainer.firstChild)

     // history income
    const incomeHistory = addBalanceTotalCalculate("income");
    document.getElementById('income-history').innerText = incomeHistory.toFixed(2)

    // history expenses
    const softer = addBalanceTotalCalculate("softer");
    const courses = addBalanceTotalCalculate("courses");
    const internet = addBalanceTotalCalculate("internet");
    const expensesTotal = softer + courses + internet;
    document.getElementById("expenses-history").innerText = expensesTotal.toFixed(2);

    // history balance
    const historyBalance = searchHistoryBalance("balance");
    document.getElementById("balance-history").innerText = historyBalance.toFixed(2);
})

const assistantTab = document.getElementById('assistant-btn');
    assistantTab.addEventListener("click", function(){
    assistantTab.classList.add("rounded-l-md", "py-2", "bg-gradient-to-r", "from-blue-500", "to-violet-700","w-40", "text-white")
    document.getElementById("history-btn").removeAttribute("class")
    document.getElementById("assistant-container").classList.remove("hidden")
})
