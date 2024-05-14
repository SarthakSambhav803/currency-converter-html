document.getElementById('convertBtn').addEventListener('click', async function() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();

    const exchangeRate = data.rates[toCurrency];
    const convertedAmount = exchangeRate * amount;

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});