function createScrollSwiper(){
    var params = {
        direction: 'vertical',
        effect: "slide",
        slidesPerView: 1,
        nested:true,
        allowTouchMove: true,
        lazy:true,
        // eventsTarget:"#wrapper",
        simulateTouch: true,  // Включение имитации касания (swipe) на сенсорных устройствах
        mousewheel: {
            enabled: true,  // Включение обработки событий колесика мыши
        },
        mousewheelControl: true,
        parallax: true,
        speed: 350
    };
    let wrapper = new Swiper('#wrapper', params);
    
    // Проверка, есть ли сохраненное значение активного слайда в sessionStorage
    const savedActiveSlide = sessionStorage.getItem('activeSlide');

    if (savedActiveSlide) {
        // Преобразование строки в число (если необходимо, в зависимости от ваших требований)
        const activeSlideIndex = parseInt(savedActiveSlide);

        // Перейти к сохраненному активному слайду
        wrapper.slideTo(activeSlideIndex, 0, false); // Последний аргумент: false - без анимации
    }
    $(".slide-to").click(function (e) { 
        e.preventDefault();
        const slideTo = $(this).attr("slide-to")
        const slideToObj = $($(document).find("#"+slideTo)).parent();
        const slideIndex = $(slideToObj).attr("aria-label").slice(0,1)
        wrapper.slideTo(parseInt(slideIndex)-1)
    });
    // Слушатель события, срабатывающий при смене слайда
    wrapper.on('slideChange', function () {
        // Сохранение активного слайда в sessionStorage
        sessionStorage.setItem('activeSlide', wrapper.activeIndex.toString());
        sessionStorage.setItem('url', window.location.pathname);
    });
    wrapper.update()
}