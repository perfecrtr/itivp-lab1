  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        // Убираем активный класс у всех кнопок
        buttons.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс к текущей кнопке
        this.classList.add('active');
        // Можно добавить логику для обработки выбора
        console.log('Selected:', this.getAttribute('data-value'));
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-button-back');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        // Убираем активный класс у всех кнопок
        buttons.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс к текущей кнопке
        this.classList.add('active');
        // Можно добавить логику для обработки выбора
        console.log('Selected:', this.getAttribute('data-value'));
      });
    });
  });

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

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.filter-button');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      // Убираем класс active у всех кнопок
      buttons.forEach(btn => btn.classList.remove('active'));
      // Добавляем класс active к текущей кнопке
      this.classList.add('active');
    });
  });
});