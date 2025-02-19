document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is running!");

    // Selectează butoanele de navigare
    let buttons = document.querySelectorAll(".nav-btn");

    // Array pentru a stoca cheltuielile
    let expenses = [];

    // Selectează elementele din formularul de adăugare a cheltuielilor
    const expenseNameInput = document.getElementById("desc");
    const expenseAmountInput = document.getElementById("amount");
    const addExpenseBtn = document.querySelector(".add-btn"); // Butonul verde
    const reportsList = document.getElementById("reportsList");
    const reportsSection = document.getElementById("reportsSection");
    const addExpenseForm = document.getElementById("addExpenseForm");

    // Debugging pentru a vedea dacă butonul este selectat corect
    console.log("Add Expense Button", addExpenseBtn);

    // Adăugăm eveniment pentru butonul de "Add Expense" (green)
    addExpenseBtn.addEventListener("click", function (event) {
        console.log("Add Expense button clicked");  // Debugging pentru confirmare

        event.preventDefault(); // Previne comportamentul implicit al formularului

        const expenseName = expenseNameInput.value;
        const expenseAmount = parseFloat(expenseAmountInput.value);

        console.log("Expense Data:", expenseName, expenseAmount); // Debugging

        if (expenseName && !isNaN(expenseAmount)) {
            // Adaugă cheltuiala în array
            expenses.push({ name: expenseName, amount: expenseAmount });

            // Curăță câmpurile formularului
            expenseNameInput.value = "";
            expenseAmountInput.value = "";

            alert("Cheltuială adăugată cu succes!");

            // Nu schimbăm pagina, dar adăugăm cheltuiala la raport
            addExpenseForm.style.display = "none"; // Ascunde formularul
            reportsSection.style.display = "block"; // Afișează secțiunea de rapoarte

            // Golește lista de rapoarte
            reportsList.innerHTML = "";

            // Găsește și adaugă toate cheltuielile la rapoarte
            expenses.forEach(function (expense) {
                const li = document.createElement("li");
                li.textContent = `${expense.name}: ${expense.amount} RON`;
                reportsList.appendChild(li);
            });
        } else {
            alert("Te rog să completezi toate câmpurile corect!");
        }
    });

    // Adăugăm eveniment pentru butonul de "Reports"
    buttons[2].addEventListener("click", function () {
        console.log("Reports button clicked");

        // Arată secțiunea de rapoarte
        addExpenseForm.style.display = "none"; // Ascunde formularul
        reportsSection.style.display = "block"; // Afișează secțiunea de rapoarte

        // Golește lista de rapoarte
        reportsList.innerHTML = "";

        // Verifică dacă există cheltuieli și le adaugă în raport
        if (expenses.length > 0) {
            expenses.forEach(function (expense) {
                const li = document.createElement("li");
                li.textContent = `${expense.name}: ${expense.amount} RON`;
                reportsList.appendChild(li);
            });
        } else {
            reportsList.innerHTML = "<li>Nu există cheltuieli adăugate.</li>";
        }
    });

    // Adăugăm eveniment pentru butonul de "Home"
    buttons[0].addEventListener("click", function () {
        console.log("Home button clicked");
        addExpenseForm.style.display = "block"; // Afișează formularul
        reportsSection.style.display = "none"; // Ascunde secțiunea de rapoarte
    });

    // Adăugăm eveniment pentru butonul de "Add Expense" (portocaliu) din meniu
    buttons[1].addEventListener("click", function () {
        console.log("Add Expense button clicked");

        // Ascunde secțiunea de rapoarte și arată formularul
        reportsSection.style.display = "none";
        addExpenseForm.style.display = "block";
    });
});