  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        console.log('Selected:', this.getAttribute('data-value'));
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-button-back');
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        console.log('Selected:', this.getAttribute('data-value'));
      });
    });
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    const navigationMenu = document.querySelector('.navigation_list__menu');
    const navigationItems = document.querySelectorAll('.navigation_item'); 
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
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  ymaps.ready(initMap);
  function initMap() {
    const map = new ymaps.Map('agency-offices-map', {
      center: [52.366487, 30.381984],
      zoom: 12, 
      controls: ['zoomControl', 'geolocationControl']
    });

    const offices = [
      {
        coords: [52.366487, 30.381984],
        name: "Главный офис",
        address: "ул. Сыдько, 122",
        phone: "+375 (29) 555-55-55",
        workHours: "09:00 - 21:00",
        preset: 'islands#blueHomeIcon'
      },
      {
        coords: [53.907669, 27.549759],
        name: "Минский офис",
        address: "проспект Победителей, 7А",
        phone: "+375 (29) 444-44-44",
        workHours: "10:00 - 20:00",
        preset: 'islands#blueHomeIcon'
      },
      {
        coords: [53.675315, 23.825867],
        name: "Гродненский офис",
        address: "Заводская улица, 13",
        phone: "+375 (29) 333-33-33",
        workHours: "10:00 - 20:00",
        preset: 'islands#blueHomeIcon'
      },
      {
        coords: [52.086470, 23.678903],
        name: "Брестский офис",
        address: "проспект Машерова, 6А",
        phone: "+375 (29) 222-22-22",
        workHours: "10:00 - 20:00",
        preset: 'islands#blueHomeIcon'
      }
    ];

    offices.forEach(office => {
      const placemark = new ymaps.Placemark(
        office.coords,
        {
          balloonContentHeader: `<strong>${office.name}</strong>`,
          balloonContentBody: `
            <p>Адрес: ${office.address}</p>
            <p>Телефон: ${office.phone}</p>
            <p>Время работы: ${office.workHours}</p>
          `,
          hintContent: office.name
        },
        {
          preset: office.preset || 'islands#blueDotIcon',
          balloonCloseButton: true
        }
      );
      
      map.geoObjects.add(placemark);
    });
    if (offices.length > 1) {
      map.setBounds(map.geoObjects.getBounds(), {
        checkZoomRange: true
      });
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slides-container');
  const slides = document.querySelectorAll('.review-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dotsContainer = document.querySelector('.dots-container');
  let currentIndex = 0;
  let autoSlideInterval;

  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function goToSlide(index) {
    slides.forEach(slide => {
      slide.classList.remove('active');
      slide.style.display = 'none';
    });
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;
    slides[currentIndex].classList.add('active');
    slides[currentIndex].style.display = 'flex';
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
    resetAutoSlide();
  }
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 7000); 
  }
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }
  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
  slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  slider.addEventListener('mouseleave', startAutoSlide);
  slider.addEventListener('focusin', () => clearInterval(autoSlideInterval));
  slider.addEventListener('focusout', startAutoSlide);
  startAutoSlide();
  goToSlide(0);
});