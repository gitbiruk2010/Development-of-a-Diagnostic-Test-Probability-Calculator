async function calculateBayes() {
    const prevalence = parseFloat(document.getElementById('prevalence').value);
    const sensitivity = parseFloat(document.getElementById('sensitivity').value);
    const specificity = parseFloat(document.getElementById('specificity').value);

    const errorElement = document.getElementById('error');
    const resultElement = document.getElementById('result');
    
    errorElement.textContent = '';
    resultElement.textContent = '';

    if (prevalence < 0 || prevalence > 1 || sensitivity < 0 || sensitivity > 1 || specificity < 0 || specificity > 1) {
        errorElement.textContent = 'Please enter values between 0 and 1 for all inputs.';
        return;
    }

    const response = await fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prevalence, sensitivity, specificity })
    });

    const data = await response.json();
    resultElement.innerHTML = `
        <p>The Probability of Disease given Positive Test: ${data.probabilityPositive.toFixed(4)}</p>
        <p>The Probability of Disease given Negative Test: ${data.probabilityNegative.toFixed(4)}</p>
        <p><strong>Interpretation:</strong></p>
        <p>If the test result is positive, the probability that the patient has the disease is ${data.probabilityPositive.toFixed(4)}.</p>
        <p>If the test result is negative, the probability that the patient has the disease is ${data.probabilityNegative.toFixed(4)}.</p>
    `;
}
