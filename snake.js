document.addEventListener("DOMContentLoaded", () => {
    const targetElement = document.getElementById("target");
    const scoreElement = document.getElementById("score");
    const startButton = document.getElementById("startButton");
    const endButton = document.getElementById("endButton");

    let score = 0;
    let clickCount = 0;
    let gameStarted = false;

    function resetTarget() {
        const randomSize = Math.floor(Math.random() * 50) + 10; // Random size between 10 and 60
        const randomColor = getRandomColor();
        const randomX = Math.random() * (300 - randomSize);
        const randomY = Math.random() * (300 - randomSize);

        targetElement.style.width = `${randomSize}px`;
        targetElement.style.height = `${randomSize}px`;
        targetElement.style.backgroundColor = randomColor;
        targetElement.style.border = `3px solid ${randomColor}`;
        targetElement.style.left = `${randomX}px`;
        targetElement.style.top = `${randomY}px`;
        scoreElement.textContent = `Score: ${score}`;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function handleClick() {
        if (gameStarted) {
            score += 10;
            clickCount++;
            if (clickCount >= 3) {
                endGame();
            } else {
                resetTarget();
            }
        }
    }

    function startGame() {
        score = 0;
        clickCount = 0;
        gameStarted = true;
        startButton.style.display = "none";
        endButton.style.display = "inline-block";
        resetTarget();
    }

    function endGame() {
        gameStarted = false;
        startButton.style.display = "inline-block";
        endButton.style.display = "none";
        alert("Game Over! Your final score: " + score);
    }

    targetElement.addEventListener("click", handleClick);
    startButton.addEventListener("click", startGame);
    endButton.addEventListener("click", endGame);

    // Initialize the target
    resetTarget();
});
