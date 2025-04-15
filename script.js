// Basic JS - Can be expanded for mobile menu, dynamic content loading, etc.
console.log("FRESH Auto Brand Zone JS Initialized");

// Example: Simple mobile menu toggle (requires a button with id="mobile-menu-button" and nav with class "main-nav")
/*
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const nav = document.querySelector('.main-nav');

    if (menuButton && nav) {
        // Ensure nav is initially hidden on mobile if CSS doesn't handle it
        if (window.innerWidth <= 768) { 
             nav.style.display = 'none';
        }
        
        menuButton.addEventListener('click', () => {
            const isVisible = nav.style.display === 'block';
            nav.style.display = isVisible ? 'none' : 'block';
        });

        // Optional: Hide menu again if window is resized larger
        window.addEventListener('resize', () => {
             if (window.innerWidth > 768) {
                 nav.style.display = ''; // Reset display to let CSS handle it
             }
        });
    }
});
*/

document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answerDiv = item.querySelector('.faq-answer');

        if (questionButton && answerDiv) { // Ensure elements exist
            questionButton.addEventListener('click', () => {
                // Toggle the 'active' class on the faq-item
                const isActive = item.classList.contains('active');

                // Optional: Close other open items
                // faqItems.forEach(otherItem => {
                //     otherItem.classList.remove('active');
                // });

                if (!isActive) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    });

    // Add any other future JavaScript functionality here
    // Example: Mobile menu toggle, form submission handling, sliders etc.

}); 