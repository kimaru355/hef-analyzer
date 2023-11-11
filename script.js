const calculate = document.querySelector("#calculate");
let error = document.querySelector("#error");
let result = document.querySelector("#result");
let p = document.createElement("p");
let feesAmount = document.querySelector("#feesAmount");
let scholarshipAmount = document.querySelector("#scholarshipAmount");
let loanAmount = document.querySelector("#loanAmount");
let helbAmount = document.querySelector("#helbAmount");
let parentAmount = document.querySelector("#parentAmount");
const band1 = {
    "scholarship": .7,
    "loan": .25,
    "parent": .05,
    "helb": 60
}
const band2 = {
    "scholarship": .6,
    "loan": .3,
    "parent": .1,
    "helb": 55
}
const band3 = {
    "scholarship": .5,
    "loan": .3,
    "parent": .2,
    "helb": 50
}
const band4 = {
    "scholarship": .4,
    "loan": .3,
    "parent": .3,
    "helb": 45
}
const band5 = {
    "scholarship": .3,
    "loan": .3,
    "parent": .4,
    "helb": 40
}
const validateNumber = /^[0-9]+$/;
calculate.addEventListener("click", () => {
    let fees = document.querySelector("#fees").value;
    let scholarship = document.querySelector('#scholarship').value;
    error.textContent = "";
    result.textContent = "";
    if (fees === "" || scholarship === "") {
        error.textContent = "Enter your fees and scholarship amount";
        return;
    }
    if ((fees.match(validateNumber)) && (scholarship.match(validateNumber))) {
        try {
            switch (scholarship / fees) {
                case .7:
                    output(fees, band1);
                    break;
                case .6:
                    output(fees, band2);
                    break;
                case .5:
                    output(fees, band3);
                    break;
                case .4:
                    output(fees, band4);
                    break;
                case .3:
                    output(fees, band5);
                    break;
                default:
                    error.textContent = "Kindly confirm your fees and scholarship amount.";
            }
        } catch (e) {
            // avoid division error
            console.log(e);
        }
    } else {
        error.textContent = "Enter integer values only";
    }
})

function output (fees, band) {
    feesAmount.textContent = "Ksh. " + fees;
    scholarshipAmount.textContent = "Ksh. " + (fees * band.scholarship);
    loanAmount.textContent = "Ksh. " + (fees * band.loan);
    helbAmount.textContent = "Ksh. " + (band.helb * 1000);
    parentAmount.textContent = "Ksh. " + (fees * band.parent);
}