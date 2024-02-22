// Skrypt do zliczania odwiedzin
let counter = 0;
const counterElement = document.getElementById('counter');
function incrementCounter() {
    counter++;
    counterElement.textContent = counter;
}
// Inkrementuj licznik przy każdym odświeżeniu strony
window.onload = incrementCounter;

// Generowanie losowych śnieżek
const container = document.querySelector('.container');
const numberOfSnowflakes = 50;

for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`;
    container.appendChild(snowflake);
}
