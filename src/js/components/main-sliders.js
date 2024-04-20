import Swiper from 'swiper/bundle';

import { SliderPaginationProgress } from '../modules/Sliders';


let benefitsSlider = new Swiper('#benefits-top-slider', {
  loop: true,
  noSwipingClass: 'no-swiping-class',
  spaceBetween: 15,
  speed: 5000,
  autoplay: {
    enabled: true,
    delay: 1,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      // spaceBetween: 27,
      // centeredSlides: true
    },
    680: {
      slidesPerView: 'auto',
      // spaceBetween: 27,
      // centeredSlides: true
    },
    1440: {
      
    }
  },
});

function enableSlider() {
  if (window.innerWidth > 599) {
      if (benefitsSlider) {
          benefitsSlider.destroy();
          benefitsSlider = null;

          document.querySelector('#benefits-top-slider .swiper-wrapper').style.justifyContent = 'center';

      }
  } else {
      if (!benefitsSlider) {

        document.querySelector('#benefits-top-slider .swiper-wrapper').style.justifyContent = '';

          // benefitsSlider = new Swiper('#benefits-top-slider', {
          //   loop: true,
          //   noSwipingClass: 'no-swiping-class',
          //   centeredSlides: true,
          //   spaceBetween: 15,
          //   autoplay: {
          //     disableOnInteraction: false,
          //     pauseOnMouseEnter: true,
          //   },
          //   freeMode: true,
          //   breakpoints: {
          //     320: {
          //       slidesPerView: 'auto',
          //       spaceBetween: 27,
          //       centeredSlides: true
          //     },
          //     680: {
          //       slidesPerView: 'auto',
          //       spaceBetween: 27,
          //       centeredSlides: true
          //     },
          //     1440: {
                
          //     }
          //   },
          // });

          benefitsSlider = new Swiper('#benefits-top-slider', {
            loop: true,
            noSwipingClass: 'no-swiping-class',
            spaceBetween: 15,
            speed: 5000,
            autoplay: {
              enabled: true,
              delay: 1,
            },
            breakpoints: {
              320: {
                slidesPerView: 'auto',
                // spaceBetween: 27,
                // centeredSlides: true
              },
              680: {
                slidesPerView: 'auto',
                // spaceBetween: 27,
                // centeredSlides: true
              },
              1440: {
                
              }
            },
          })

      }
  }
}

enableSlider();

const mainSliders = {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      bulletElement: 'button',
      renderBullet: function (index, className) {
        return `
            <button class="${className} overflow-hidden" aria-label="Перейти на слайд ${index + 1}">
                <span class="${mainSliders.autoplay.delay}"></span>
            </button>`
      },
    },
}

const swiper = new Swiper('#swiperMainSlider1', {
    loop: true,
    effect: 'fade',
    autoplay: mainSliders.autoplay,
    pagination: mainSliders.pagination,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})

const swiper2 = new Swiper('#swiperMainSlider2', {
    loop: true,
    effect: 'fade',
    autoplay: mainSliders.autoplay,
    pagination: mainSliders.pagination,
})

const swiper3 = new Swiper('#swiperMainSlider3', {
  loop: true,
  slidesPerGroup: 1,
  watchSlidesProgress: true,
  autoplay: mainSliders.autoplay,
  effect: 'fade',
  pagination: mainSliders.pagination,
})


// new Swiper('#popular-slider', {
//     loop: true,
//     noSwipingClass: 'no-swiping-class',
//     slidesPerView: 5,
//     spaceBetween: 16,
//     navigation: {
//       nextEl: '.popularProducts-right',
//       prevEl: '.popularProducts-left',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       bulletActiveClass: 'swiper-pagination-bullet-active',
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 2,
//         spaceBetween: 12,
//         slidesPerGroup: 2,
//       },
//       680: {
//         slidesPerView: 3,
//         spaceBetween: 12,
//         slidesPerGroup: 3,
//       },
//       1020: {
//         slidesPerView: 4,
//         slidesPerGroup: 4,
//       },
//       1440: {
//         slidesPerView: 5,
//         slidesPerGroup: 5,
//       },
//     },
// });

// new Swiper('#newProducts-slider', {
//   loop: true,
//   noSwipingClass: 'no-swiping-class',
//   slidesPerView: 5,
//   spaceBetween: 16,
//   navigation: {
//     nextEl: '.newProducts-right',
//     prevEl: '.newProducts-left',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     bulletActiveClass: 'swiper-pagination-bullet-active',
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 12,
//       slidesPerGroup: 2,
//     },
//     680: {
//       slidesPerView: 3,
//       spaceBetween: 12,
//       slidesPerGroup: 3,
//     },
//     1024: {
//       slidesPerView: 4,
//       slidesPerGroup: 4,
//     },
//     1440: {
//       slidesPerView: 5,
//       slidesPerGroup: 5,
//     },
//   },
// });

// new Swiper('#collection-slider', {
//   lazy: true,
//   noSwipingClass: 'no-swiping-class',
//   slidesPerView: 4,
//   spaceBetween: 8,
//   navigation: {
//     nextEl: '.collection-slider-next',
//     prevEl: '.collection-slider-prev',
//     disabledClass: 'no',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     bulletActiveClass: 'swiper-pagination-bullet-active',
//   },
//   grid: {
//     rows: 2,
//     fill: 'row',
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//       slidesPerGroup: 2,
//     },
//     680: {
//       slidesPerView: 3,
//       spaceBetween: 12,
//       slidesPerGroup: 3,
//     },
//     1024: {
//       slidesPerView: 4,
//       slidesPerGroup: 4,
//     },
//     1440: {
//       slidesPerView: 4,
//       slidesPerGroup: 4,
//     },
//   },
// })

new Swiper('#benefits-slider', {
  loop: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 5.5,
  spaceBetween: 15,
  autoplay: mainSliders.autoplay,
  freeMode: true,
  navigation: {
    nextEl: '.nav-arrow-right',
    prevEl: '.nav-arrow-left',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    // 680: {
    //   slidesPerView: 3,
    //   spaceBetween: 12,
    // },
    // 1024: {
    //   slidesPerView: 4,
    // },
    // 1440: {
    //   slidesPerView: 6,
    //   slidesPerGroup: 7,
    // },
  },
});

new Swiper('#sales-slider', {
  loop: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 4,
  spaceBetween: 8,
  navigation: {
    nextEl: '.nav-arrow-right',
    prevEl: '.nav-arrow-left',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
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
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

const primarySwiperPagination = new SliderPaginationProgress(
    swiper,
    mainSliders.autoplay.delay / 1000,
    mainSliders.pagination
)

const primarySwiperPagination2 = new SliderPaginationProgress(
    swiper2,
    mainSliders.autoplay.delay / 1000,
    mainSliders.pagination
)

const primarySwiperPagination3 = new SliderPaginationProgress(
  swiper3,
  mainSliders.autoplay.delay / 1000,
  mainSliders.pagination
)


window.addEventListener('resize', enableSlider);
