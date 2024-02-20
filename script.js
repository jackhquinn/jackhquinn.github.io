let lastScrollTop = 0; // Variable to hold the last scroll position

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Downward scroll
        document.getElementById("main-header").style.top = "-100px"; // Adjust value based on header height
    } else {
        // Upward scroll
        document.getElementById("main-header").style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

document.addEventListener('DOMContentLoaded', () => {
    // Function to animate a path
    function animatePath(selector, delay = 0) {
        const path = document.querySelector(selector);
        const length = path.getTotalLength();
        console.log(`${selector} length:`, length);

        // Set initial dash array and dash offset to path length
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        // Trigger animation with optional delay
        path.getBoundingClientRect(); // Causes reflow, necessary for animation to start
        path.style.transition = `stroke-dashoffset 0.5s ease-in-out ${delay}s`;
        path.style.strokeDashoffset = '0';
    }

    // Animate the first path
    animatePath('.above-left svg path');

    // Animate the second path after a delay
    animatePath('.below-right svg path', 0.7); // 2s delay, adjust as needed
});