const billAmountElement = document.querySelector("#billAmount"),
billForm = document.querySelector("#billForm"),
totalPersonElement = document.querySelector("#persons"),
tipPercentageElement = document.querySelector("#tipPercentage");

// global variable 
let billAmount, totalPerson, tipPercentage, totalBillAmount, totalTipAmount;


billForm.addEventListener('submit', (event) => {
    event.preventDefault()
    billAmount = parseInt(billAmountElement.value);
    totalPerson = parseInt(totalPersonElement.value);
    tipPercentage = parseFloat(tipPercentageElement.value);

    if(isNaN(billAmount) || isNaN(totalPerson) || isNaN(tipPercentage)){
        return alert("Enter a valild number")
    }
    else{
        totalTipAmount = parseFloat(((billAmount * (tipPercentage / 100)) * totalPerson).toFixed(2))
        totalBillAmount = parseFloat((billAmount - totalTipAmount).toFixed(2))
        document.getElementById("totalBill").innerText = `Total Bill: ${totalBillAmount} TK`;
        document.getElementById("totalTipAmount").innerText = `Total Tip Amount: ${totalTipAmount}`
        
    }

    



})