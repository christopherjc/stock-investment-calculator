function calculateInvestment() {
    const shares = document.getElementById('shares').value;
    const price = document.getElementById('price').value;

    if (shares > 0 && price > 0) {
        const totalInvestment = shares * price;
        document.getElementById('result').innerHTML = `Total: $${totalInvestment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid numbers for shares and price.';
    }
}

function resetFields() {
    document.getElementById('shares').value = '';
    document.getElementById('price').value = '';
    document.getElementById('result').innerHTML = '';
}
