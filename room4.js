// room4.js
function checkAnswer(button, correctness) {
    const resultDiv = document.getElementById('result');
    const menuButton = document.getElementById('menuButton');
    
    if (correctness === 'correct') {
        resultDiv.textContent = 'Správně! Zde je část klíče: 4';
        resultDiv.style.color = '#28a745';
        button.style.backgroundColor = '#28a745';
        menuButton.classList.remove('hidden');
    } else {
        resultDiv.textContent = 'Špatně, zkuste to znova.';
        resultDiv.style.color = '#d9534f';
        button.style.backgroundColor = '#d9534f';
    }
}
