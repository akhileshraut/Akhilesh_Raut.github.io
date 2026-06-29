// Horizontal Slider Navigation Controller Logic
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById('carousel-track');
    const btnLeft = document.getElementById('slide-left');
    const btnRight = document.getElementById('slide-right');

    // Return safely if the elements are missing on the page
    if (!track || !btnLeft || !btnRight) return;

    // Dynamically compute shift calculations based on active card dimensions
    btnRight.addEventListener('click', () => {
        const firstCard = document.querySelector('.slider-card');
        if (firstCard) {
            const cardWidth = firstCard.offsetWidth + 24; // Width + horizontal layout gap
            track.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    });

    btnLeft.addEventListener('click', () => {
        const firstCard = document.querySelector('.slider-card');
        if (firstCard) {
            const cardWidth = firstCard.offsetWidth + 24;
            track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
    });
});
