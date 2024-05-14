document.addEventListener('DOMContentLoaded', function() {
    const iceCreamItems = document.querySelectorAll('.ice-cream-item');

    iceCreamItems.forEach(item => {
        const orderBtn = item.querySelector('.order-btn');
        orderBtn.addEventListener('click', () => {
            const itemName = item.querySelector('h3').textContent;
            alert(`You ordered ${itemName}. Enjoy your treat!`); // Fix string interpolation
        });

        // Add click event listener to toggle selected class
        item.addEventListener('click', () => {
            item.classList.toggle('selected');
        });
    });

    // Add scroll event listener to change header style
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
