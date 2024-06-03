// vychod.js
document.addEventListener('DOMContentLoaded', () => {
    const correctKey = 'NH4Cl'; 
    const keyInput = document.getElementById('keyInput');
    const resultDiv = document.getElementById('result');
    const menuButton = document.getElementById('menuButton');
    const modal = document.getElementById('wrongKeyModal');
    const closeModalButton = document.getElementById('closeModal');

    const checkKey = () => {
        const enteredKey = keyInput.value;

        if (enteredKey === correctKey) {
            resultDiv.textContent = 'Gratuluju! Úspěšně jste unikli.';
            resultDiv.style.color = '#28a745';
            menuButton.classList.remove('hidden');
        } else {
            showModal();
        }
    };

    const showModal = () => {
        modal.style.display = 'flex';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    closeModalButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.querySelector('button[onclick="checkKey()"]').addEventListener('click', checkKey);
});
