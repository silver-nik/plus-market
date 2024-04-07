import Services from "../helpers/services";
import SmallSlider from "./small-slider";
import MediumSlider from "./medium-slider";

let createProductCard = (product, size) => {

    return `
        
        <div class="product-card d-flex ${size == 'md' ? 'card-big' : ''} d-column swiper-slide">

            <div class="product-card__header d-flex">

                <div class="product-card__seller">
                    <img src="./images/d64295462828a52f6e3c1a70a5dc704d.png" alt="Продавец">  
                </div>

                <div class="product-card__seller-data d-flex d-column">

                    <div class="seller__data-top d-flex">
                        <span class="seller__user-name">Shevtshuck49</span>
                        <span class="seller__rate d-flex">4.5</span>
                    </div>

                    <div class="seller__data-bottom d-flex items-center">
                        <span class="seller__lifecycle hidden-sm">3 года на сайте</span>
                        <span class="dot"></span>
                        <span class="seller__trades">10 234 сделки</span>
                    </div>

                </div>

            </div>npm 

            <div class="product-card__body p-relavtive">

                <div class="product-card__img-content d-flex j-center items-center">

                    <img src="${product.image}" alt="Фото продукта" class="product-card__img"> <!-- fix image -->

                    <div class="product-card__tags">

                        <div class="tag-list p-absolute d-flex">

                            <div class="tag-item tag-item__sharp">
                            </div>

                            <div class="tag-item tag-item__in-stock p-relavtive">
                                <span class="stock-counter p-absolute">12</span>
                            </div>

                        </div>

                        <div class="tag-sale p-absolute d-flex">
                            <div class="tag-item tag-item__sale">
                                <img src="./images/percent.svg" alt="">
                            </div>
                            <span class="sale-amount">-62 000</span>
                        </div>

                    </div>

                    <div class="product-card__stats p-absolute d-flex j-center items-end">

                        <span class="stats__views">246</span>
                        <span class="stats__likes">32</span>

                    </div>

                </div>

                <div class="product-card__info-content">

                    <span class="product__title">${product.title}</span>

                    <div class="product__categories d-flex items-center">
                        <span class="product__category">Аксессуары</span>
                        <span class="dot"></span>
                        <span class="product__date">Spring 23</span>
                    </div>

                    <div class="product__price-block d-flex items-center">
                        <span class="price__low">
                            ${product.price}
                        </span>
                    </div>

                    <span class="product__order d-flex prod-delivery">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M11.94 7.64668H9.88001V2.84668C9.88001 1.72668 9.27334 1.50001 8.53334 2.34001L8.00001 2.94668L3.48667 8.08001C2.86667 8.78001 3.12667 9.35335 4.06001 9.35335H6.12001V14.1533C6.12001 15.2733 6.72667 15.5 7.46667 14.66L8.00001 14.0533L12.5133 8.92001C13.1333 8.22001 12.8733 7.64668 11.94 7.64668Z" fill="#FF9637"/>
                        </svg>

                        Доставим за 7-14 дней
                    </span>

                </div>

            </div>


        </div>
    
    `

}

let setSlider = ({containerName, navObj = {}, categoryName, limitProducts}) => {

    let parent = document.querySelector(`${containerName}`);

    Services.getAllProducts(limitProducts, categoryName)
        .then((products, i) => {

            products.map(item => parent.querySelector('.swiper-wrapper').innerHTML += createProductCard(item))

            new SmallSlider(
                containerName, 
                navObj.nextBtn, 
                navObj.prevBtn
            ).init()

        })

}

// setSlider(
//     '#popular-slider', 
//     {
//         nextBtn: '.popularProducts-right',
//         prevBtn: '.popularProducts-left'
//     },
//     'electronics', 
//     5
// )

setSlider({

    containerName: "#popular-slider", 
    navObj: {
        nextBtn: '.popularProducts-right',
        prevBtn: '.popularProducts-left'
    },
    categoryName: "electronics", 
    limitProducts: 5

})

setSlider({

    containerName: "#newProducts-slider", 
    navObj: {
        nextBtn: '.newProducts-right',
        prevBtn: '.newProducts-left'
    },
    categoryName: "jewelery", 
    limitProducts: 10

})