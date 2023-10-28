// For scrolling list below headshots
const scrollingList = document.querySelector('.scrolling-list');

scrollingList.addEventListener('mouseenter', () => {
    scrollingList.style.animationPlayState = 'paused';
});

scrollingList.addEventListener('mouseleave', () => {
    scrollingList.style.animationPlayState = 'running';
});

