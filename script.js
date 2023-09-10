const fadeTextElements = document.querySelectorAll('.fade-text');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.5 // Adjust the threshold as needed
});

fadeTextElements.forEach((element) => {
    observer.observe(element);
});
