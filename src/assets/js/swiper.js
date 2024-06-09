function createSwiper(name, params, autoplayUpdate){
    let swiper = new Swiper(name, params);
    $(window).on('resize', function(){
        if(autoplayUpdate){
            swiper.autoplay.start();
        }
        swiper.update();
    });
}