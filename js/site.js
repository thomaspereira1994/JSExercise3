function getValues() {
    //gets values in input boxes
    let firstInput = document.getElementById("firstInput").value;
    let secondInput = document.getElementById("secondInput").value;

    //parses values into integers
    firstInput = parseInt(firstInput);
    secondInput = parseInt(secondInput);

    if (Number.isInteger(firstInput) && Number.isInteger(secondInput)) {
        let numbers = generateNumbers();
        calculateMultiples(numbers, firstInput, secondInput);
    } else {
        alert("input values must be integers");
    }
}

function generateNumbers() {
    let numbers = [];

    for (let index = 1; index <= 100; index++) {
        numbers.push(index);
    }
    return numbers;
}

function calculateMultiples(numbers, firstInput, secondInput) {
    let templateRows = "";

    for (let i = 0; i < numbers.length; i++) {
        let className = "";
        let number = numbers[i];

        if (number % firstInput == 0 && number % secondInput == 0) {
            className = "both-multiple";
        } else if (number % firstInput == 0) {
            className = "first-multiple";
        } else if (number % secondInput == 0) {
            className = "second-multiple";
        }
        templateRows += `<tr><td class = "${className}">${number}</td></tr>`;
    }
    displayResults();
}

function displayResults(templateRows) {
    document.getElementById("results").innerHTML = templateRows;
}