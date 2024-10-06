document.getElementById("addExpenseButton").addEventListener("click", function() {
    const expenseName = document.getElementById("expenseName").value.trim();
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);

    if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
        const li = document.createElement("li");
        li.innerHTML = `${expenseName} - $${expenseAmount.toFixed(2)} 
                        <button class="delete-button">Delete</button>`;

        const deleteButton = li.querySelector(".delete-button");
        deleteButton.addEventListener("click", function() {
            li.remove();
            updateTotal(-expenseAmount);
        });

        document.getElementById("expenseList").appendChild(li);
        updateTotal(expenseAmount);

        // Clear input fields
        document.getElementById("expenseName").value = '';
        document.getElementById("expenseAmount").value = '';
    }
});

function updateTotal(amount) {
    const totalElement = document.getElementById("totalAmount");
    let currentTotal = parseFloat(totalElement.textContent);
    currentTotal += amount;
    totalElement.textContent = currentTotal.toFixed(2);
}
