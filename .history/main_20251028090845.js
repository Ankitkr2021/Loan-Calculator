
function calculateLoan() {
    loanAmountValue = document.getElementById("loan").value;
    totalInterestRate = document.getElementById("interest").value;
    MonthsToPay = document.getElementById("months").value;

    totalInterest = (loanAmountValue * (totalInterestRate * 0.01)) / MonthsToPay
}
