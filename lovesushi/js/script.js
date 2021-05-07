var swiper = new Swiper('.content__swipper', {
    loop: 'true',
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

});
var swiper = new Swiper('.card__swipper', {
    loop: 'true',
    slidesPerView: 1,
    slidesPerGroup:4,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        1320: {
            slidesPerView: 4
        },
        769: {
            slidesPerView: 3
        },
        551: {
            slidesPerView: 2
        },
    }
});

$('.card__icon--left').on('click', function () {
    let $this = $(this),
        $val = $this.parent().find('.card__js'),
        val = $val.text();
    if (val <=1) {
    
    }
    else {
    $val.text(+val - 1);}
    
});
$('.card__icon--right').on('click', function () {
    let $this = $(this),
        $val = $this.parent().find('.card__js'),
        val = $val.text();
    $val.text(+val + 1);
});