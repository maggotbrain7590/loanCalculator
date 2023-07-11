window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount = document.getElementById('loan-amount');
  const years = document.getElementById('loan-years');
  const rate = document.getElementById('loan-rate');
  amount.value = 5000;
  years.value = 3;
  rate.value = 5;
  update(); 
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    const currentValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
const rate = (values.rate / 100) / 12;
const n = (values.years * 12);
return ((values.amount * rate) /
       (1-(1+rate) ** -n)).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(payment) {
  const monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = '$' + payment;
  
}
