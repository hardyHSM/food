(function($){
    var menuButton = $('.menu-button');
    var nav = $('.menu-button__nav');

    menuButton.on('click', function () {
        $(this).toggleClass('menu-button_active');
    });

})($);

(function($){
    var sliderItem = $('.timeline-slider__item');
    var sliderPreview = $('.timeline-slider__preview');
    var alcoaTitle = $('.alcoa__title');

    sliderItem.on('click', function () {
       var activeItemContent = $(this).text();

       sliderItem.removeClass('timeline-slider__item_active');
       $(this).addClass('timeline-slider__item_active');
       sliderPreview.text(activeItemContent);
       alcoaTitle.text('AlCOA INS. (till Dec ' + activeItemContent + ')');
    });

})($);

(function($){
    var newsPostList = $('.social-post-section__list');

    newsPostList.slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true
    });

})($);


(function($){
    var travelSlider = $('.travel-memory__list');

    travelSlider.slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        variableWidth: true,
        prevArrow: ".travel-memory__left",
        nextArrow: ".travel-memory__right"
    });

})($);






