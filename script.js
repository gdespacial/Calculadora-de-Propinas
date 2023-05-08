function calculateTip() {
    var totalAmount = parseFloat(document.getElementById("totalAmount").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    var currency = document.getElementById("currency").value; 
    
    // validación para asegurarse de que los valores ingresados sean numéricos
    
    if (Number.isNaN(totalAmount) || Number.isNaN(tipPercentage)) {
        document.getElementById("result").innerHTML = "Por favor, ingrese valores numéricos";
        return;
    }

    var tipAmount = (totalAmount * tipPercentage) / 100;
    var totalBill = totalAmount + tipAmount;

    document.getElementById("result").innerHTML = "Propina : " + currency + tipAmount.toFixed(2) +"<br>Total a pagar: " + totalBill.toFixed(2);
}