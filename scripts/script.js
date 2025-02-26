document.addEventListener('DOMContentLoaded', (event) => {
    const navigationMenu = document.querySelector('.navigation_list__menu');
    const navigationItems = document.querySelectorAll('.navigation_item'); // Используем querySelectorAll

    navigationMenu.addEventListener('click', () => {
        navigationItems.forEach(item => {
            if (item.style.display === 'block') {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });
    });
});