// script.js
document.addEventListener("DOMContentLoaded", () => {
    const timerDisplay = document.getElementById("time");
    const modal = document.getElementById("gameOverModal");
    const closeModal = document.getElementById("closeModal");

    let totalTime = parseInt(localStorage.getItem("remainingTime"));
    if (isNaN(totalTime)) {
        totalTime = 10 * 60; // 10 minutes in seconds
        localStorage.setItem("remainingTime", totalTime);
    }

    const updateTimer = () => {
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        if (totalTime > 0) {
            totalTime--;
            localStorage.setItem("remainingTime", totalTime);
        } else {
            clearInterval(timerInterval);
            if (modal) {
                modal.style.display = "flex";
            }
        }
    };

    let timerInterval = setInterval(updateTimer, 1000);

    if (closeModal) {
        closeModal.onclick = () => {
            modal.style.display = "none";
        };

        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }
});

function restartGame() {
    localStorage.removeItem("remainingTime");
    location.href = 'index.html';
}
