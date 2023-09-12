const billAmountElement = document.querySelector("#billAmount"),
billForm = document.querySelector("#billForm"),
totalPersonElement = document.querySelector("#persons"),
tipPercentageElement = document.querySelector("#tipPercentage"),
totalBillElement = document.querySelector("#totalBill"),
totalTipAmountElement = document.querySelector("#totalTipAmount");

// global variable 
let billAmount, totalPerson, tipPercentage, totalBillAmount, totalTipAmount;


billForm.addEventListener('submit', (event) => {
    event.preventDefault()
    billAmount = parseInt(billAmountElement.value);
    totalPerson = parseInt(totalPersonElement.value);
    tipPercentage = parseFloat(tipPercentageElement.value);
    totalBillAmount = billAmount * totalPerson;
    totalTipAmount = parseFloat(tipPercentage * totalPerson.toFixed(2))
    console.log(totalBillAmount, totalTipAmount);




})