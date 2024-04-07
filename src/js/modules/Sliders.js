export class SliderPaginationProgress {
    constructor(slider, dur, pagination) {
        this.swiper = slider;
        this.duration = dur;
        this.pagination = pagination;

        if (this.pagination) {
            this.pagination = this.swiper.el.querySelector('.swiper-pagination')
        }
      

        this.init();


    } 

    init() {

        this.swiper.on('slideChange', (e) => {
            setTimeout(() => {
                const activeBullet = this.pagination.querySelector('.swiper-pagination-bullet-active');

                if (activeBullet) {
                    this.pause()
                    this.play(activeBullet)
                    this.restart()
                }

            }, 10)
        })

        const $activeBullet = this.pagination.querySelector(
            '.swiper-pagination-bullet-active'
        )

        if ($activeBullet) this.play($activeBullet)


        this.swiper.el.addEventListener('mouseenter', () => {
            this.pause();
        })

        this.swiper.el.addEventListener('mouseleave', () => {
            this.resume();
        })

    }

    play(bullet) {
        this.currentBullet = bullet
        const progressEl = bullet.querySelector('span')

        this.tl = gsap.timeline({ paused: true })

        this.tl
            .to(progressEl, {
                x: -16,
                duration: 0,
            })
            .to(progressEl, {
                x: 0,
                duration: this.duration,
                ease: Linear.easeNone,
            })


        this.tl.play()
    }

    restart() {
        this.tl.restart()
    }

    pause() {
        if(this.tl) {
            try {
                this.tl.pause()
            } catch (e) {
                console.error(e)
                setTimeout(() => {
                    this.tl.pause()
                }, 100)
            }
        }
    }

    resume() {
        this.tl.resume();
    }
}
