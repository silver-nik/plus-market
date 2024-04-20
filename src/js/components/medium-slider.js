import Swiper from 'swiper/bundle';

class MediumSlider {
    constructor(wrapper, nextBtn, prevBtn) {
        this.wrapper = wrapper;
        this.nextBtn = nextBtn;
        this.prevBtn = prevBtn;
    }

    init() {
        new Swiper(this.wrapper, {
            lazy: true,
            noSwipingClass: 'no-swiping-class',
            slidesPerView: 4,
            spaceBetween: 8,
            navigation: {
              nextEl: this.nextBtn,
              prevEl: this.prevBtn,
              disabledClass: 'no',
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
            },
            grid: {
              rows: 2,
              fill: 'row',
            },
            breakpoints: {
              320: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              680: {
                slidesPerView: 4,
                spaceBetween: 12,
                slidesPerGroup: 4,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              1440: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                grid: {
                  rows: 2,
                  fill: 'row',
                }
              },
            },
        })
    }
}

export default MediumSlider;