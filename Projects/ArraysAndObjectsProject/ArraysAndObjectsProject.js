let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function displayExpenses() {
    let expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = ""; // Clear existing list

    // Ensure expenses is always an array before using forEach
    expenses.forEach((expense, index) => {
        let li = document.createElement("li");
        li.textContent = `${expense.description}: $${expense.amount}`;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            expenses.splice(index, 1);
            saveExpenses();
            displayExpenses();
        };

        li.appendChild(deleteBtn);
        expenseList.appendChild(li);
    });
}

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

document.getElementById("addExpenseBtn").addEventListener("click", function() {
    let description = document.getElementById("expenseDescription").value;
    let amount = document.getElementById("expenseAmount").value;

    if (description && amount) {
        expenses.push({description, amount});
        saveExpenses();
        displayExpenses();

        document.getElementById("expenseDescription").value = "";
        document.getElementById("expenseAmount").value = "";
    } else {
        alert("Please enter a valid expense.");
    }
});

displayExpenses();