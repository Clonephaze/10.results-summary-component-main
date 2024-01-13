let delay = 10; // initial delay

// Get all elements with the class name 'counter'
let counters = document.getElementsByClassName('counter');

Array.from(counters).forEach((counterElement, index) => {
    let counter = 0;
    let finalNumber = parseInt(counterElement.innerHTML);
    let timeoutId;

    const incrementCounter = () => {
        counter++;
        counterElement.innerHTML = String(counter).padStart(2, '0');

        // Stop incrementing when reaching the final number
        if (counter >= finalNumber) {
            clearTimeout(timeoutId);
        } else {
            // Decrease delay for next increment
            delay *= 1.006;

            // Schedule next increment
            timeoutId = setTimeout(incrementCounter, delay);
        }
    };

    // Start the counter increment
    incrementCounter();
});

const btnContinue = document.getElementById('btn-continue');

btnContinue.addEventListener('click', () => {
    // Make the footer get attribute "data-hidden=false" if "true", and visa versa

    const footer = document.querySelector('footer');
    if (footer.getAttribute('data-hidden') === 'true') {
        footer.setAttribute('data-hidden', 'false');
    } else {
        footer.setAttribute('data-hidden', 'true');
    }
})
