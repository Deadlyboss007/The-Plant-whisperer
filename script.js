const textElement = document.querySelector('.fade-in-out');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementOffset = textElement.getBoundingClientRect().top;

    // Calculate the opacity based on scroll position and element's position
    const opacity = Math.max(0, 1 - (elementOffset / windowHeight));

    // Apply the opacity to the text element
    textElement.style.opacity = opacity.toFixed(2); // Limit opacity to two decimal places
});
