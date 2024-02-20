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