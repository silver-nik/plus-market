import Swiper from 'swiper/bundle';

class SmallSlider {
    constructor(wrapper, nextBtn, prevBtn) {
        this.wrapper = wrapper;
        this.nextBtn = nextBtn;
        this.prevBtn = prevBtn;
    }

    init() {

        new Swiper(this.wrapper, {
            loop: true,
            noSwipingClass: 'no-swiping-class',
            slidesPerView: 5,
            spaceBetween: 16,
            navigation: {
              nextEl: this.nextBtn,
              prevEl: this.prevBtn,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
            },
            breakpoints: {
              320: {
                slidesPerView: 2,
                spaceBetween: 12,
                slidesPerGroup: 2,
              },
              680: {
                slidesPerView: 3,
                spaceBetween: 12,
                slidesPerGroup: 3,
              },
              1020: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              1440: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
            },
        });
    }

}

export default SmallSlider;