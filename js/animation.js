// animation.js
function isElementVisible(element) {
    const { top, bottom } = element.getBoundingClientRect();
    const centerY = (top + bottom) / 2;
    const offset = 100;
    const isVisible = (centerY - offset >= 0 && centerY <= (window.innerHeight + offset));
    return isVisible;
}

function getRandomDuration() {
    return (Math.random() * 0.5 + 0.4).toFixed(2) + 's';
}

function getRandomDelay() {
    return (Math.random() * 0.6).toFixed(2) + 's';
}

window.addEventListener('scroll', () => {
    const gridContainer = document.querySelector('.grid-container');

    if (isElementVisible(gridContainer) && !gridContainer.classList.contains('animated')) {
        const cards = Array.from(document.querySelectorAll('.grid-container .card'));

        cards.sort(() => Math.random() - 0.5);

        cards.forEach(card => {
            const randomDuration = getRandomDuration();
            const randomDelay = getRandomDelay();

            card.style.animation = `cardFadeIn ${randomDuration} ease-in-out ${randomDelay} forwards`;
        });

        gridContainer.classList.add('animated');
    }
});