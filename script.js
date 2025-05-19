document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const betAmountInput = document.getElementById('betAmount');
    const betOnHitButton = document.getElementById('betOnHit');
    const betOnMissButton = document.getElementById('betOnMiss');
    const gameResultElement = document.getElementById('gameResult');
    let balance = parseInt(balanceElement.textContent);

    betOnHitButton.addEventListener('click', () => {
        makeBet(true);
    });

    betOnMissButton.addEventListener('click', () => {
        makeBet(false);
    });

    function makeBet(prediction) {
        const bet = parseInt(betAmountInput.value);

        if (isNaN(bet) || bet <= 0 || bet > balance) {
            gameResultElement.textContent = 'Ставка некорректна!';
            return;
        }

        const isHit = Math.random() < 0.5; // 50% шанс попадания

        if (isHit === prediction) {
            balance += bet;
            gameResultElement.textContent = `Попал! Вы выиграли ${bet} у.е.!`;
        } else {
            balance -= bet;
            gameResultElement.textContent = `Не попал! Вы проиграли ${bet} у.е.!`;
        }

        balanceElement.textContent = balance;
    }
});