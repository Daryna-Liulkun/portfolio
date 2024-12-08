const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', // Автоматична ширина слайдів
    spaceBetween: 20, // Відстань між слайдами
    navigation: {
        nextEl: '.swiper-button-next', // Наступна кнопка
        prevEl: '.swiper-button-prev', // Попередня кнопка
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Клікабельна пагінація
    },
    loop: true, // Циклічне прокручування
});
