function updateRate() {
    document.getElementById("rateValue").innerText = document.getElementById("range22").value + "%";
}

function compute() {
    let InputValue = document.getElementById("depositAmount").value;
    let InputRange = document.getElementById("range22").value;
    let InputYear = document.getElementById("years").value;

    // Validate inputs
    if (InputValue <= 0 || InputYear <= 0) {
        alert("Enter a valid Amount and Year");
        return;
    }

    // Convert input values to numbers
    InputValue = parseFloat(InputValue);
    InputRange = parseFloat(InputRange);
    InputYear = parseInt(InputYear);

    // Calculate interest and final amount
    let interest = (InputValue * InputRange * InputYear) / 100;
    let finalAmount = InputValue + interest;

    // Get the current year and maturity year
    let currentYear = new Date().getFullYear();
    let maturityYear = currentYear + InputYear;

    // Display the result
    document.getElementById("result").innerHTML = 
    `Interest: If you deposit $<b>${InputValue}</b>,<br>
    at an interest rate of <b>${InputRange}%</b>,<br>
    You will receive an amount of $<b>${finalAmount}</b>,<br>
    in the year <b>${maturityYear}</b>.`;
}

