class CreateProductCard {
    constructor(product, size) {
        this.product = product;
        this.size = size;
    }

    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }

    productTags = ({popularity, inStock, sale}) => {

        return `

            <div class="tag-list p-absolute d-flex">

                ${
                    popularity.bool ? 

                    `
                    <div class="tag-item tag-item__sharp">
                    </div>
                    ` : ''
                    
                }

                ${
                    inStock.bool ? 
                
                    `
                    <div class="tag-item tag-item__in-stock p-relavtive">
                        <span class="stock-counter p-absolute">${inStock.sum}</span>
                    </div>
                    ` : ''
                    
                }

            </div>

            ${
                sale.bool ? 

                `
                <div class="tag-sale p-absolute d-flex">
                    <div class="tag-item tag-item__sale">
                        <img src="./images/percent.svg" alt="">
                    </div>
                    <span class="sale-amount">-${this.formatNumber(sale.sum)}</span>
                </div>
                ` : ''

            }
        
        `
    };

    sellerData = ({sellerAvatar, sellerName, sellerRate, sellerData}) => {

        return `
            <div class="product-card__seller">
                <img src="${sellerAvatar}" alt="Продавец">  
            </div>

            <div class="product-card__seller-data d-flex d-column">

                <div class="seller__data-top d-flex">
                    <span class="seller__user-name">${sellerName}</span>
                    <span class="seller__rate d-flex">${sellerRate}</span>
                </div>

                <div class="seller__data-bottom d-flex items-center">
                    <span class="seller__lifecycle hidden-sm">${sellerData.lifecycle} года на сайте</span>
                    <span class="dot"></span>
                    <span class="seller__trades">${this.formatNumber(sellerData.trades)} сделки</span>
                </div>

            </div>
        `
        
    }

    productAvalible = ({avalible}) => {
    
        return `
        <span class="product__order d-flex prod-delivery ${avalible.bool ? 'product__available' : ''}">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M11.94 7.64668H9.88001V2.84668C9.88001 1.72668 9.27334 1.50001 8.53334 2.34001L8.00001 2.94668L3.48667 8.08001C2.86667 8.78001 3.12667 9.35335 4.06001 9.35335H6.12001V14.1533C6.12001 15.2733 6.72667 15.5 7.46667 14.66L8.00001 14.0533L12.5133 8.92001C13.1333 8.22001 12.8733 7.64668 11.94 7.64668Z" fill="#FF9637"/>
            </svg>

            ${avalible.bool ? `На складе: ${avalible.store}` : 'Доставим за 7-14 дней'}
        </span>
        `
    
    }

    setProductPrice = (price, priceOld) => {

        const priceDiscount = (priceOld - price) / priceOld * 100;

        const priceDiscountPercent = Math.round(priceDiscount);

        return `
            <span class="price__low">
                ${this.formatNumber(price)}
            </span>
            <div>
                ${

                    priceOld > price ?

                        `
                            <span class="prcie__old">
                                ${this.formatNumber(priceOld)} ₽
                            </span>
                            <span class="price__discount">-${priceDiscountPercent}%</span>
                        ` : ''

                }
            </div>
        `

    }

    init() {

        const sellerInfo = {
            sellerAvatar: './images/d64295462828a52f6e3c1a70a5dc704d.png', 
            sellerName: 'Shevtshuck49', 
            sellerRate: 4.9, 
            sellerData: {
                lifecycle: 3,
                trades: 10234
            }
        }

        const productTagData = {
            popularity: {
                bool: true
            },
            inStock: {
                bool: true,
                sum: 23
            },
            sale: {
                bool: true,
                sum: 62000
            }
        }

        const productAvalible = {
            avalible: {
                bool: false,
                store: 'Москва'
            }
        }

        const {image, title, price, category} = this.product;

        return `
        
        <div class="product-card d-flex ${this.size == 'md' ? 'card-big' : ''} d-column swiper-slide">

            <div class="product-card__header d-flex">

                ${this.sellerData(sellerInfo)}                

            </div>

            <div class="product-card__body p-relavtive">

                <div class="product-card__img-content d-flex j-center items-center">

                    <img src="${image}" alt="Фото продукта" class="product-card__img"> <!-- fix image -->

                    <div class="product-card__tags">

                        ${this.productTags(productTagData)}

                    </div>

                    <div class="product-card__stats p-absolute d-flex j-center items-end">

                        <span class="stats__views">246</span>
                        <span class="stats__likes">32</span>

                    </div>

                </div>

                <div class="product-card__info-content">

                    <span class="product__title">${title}</span>

                    <div class="product__categories d-flex items-center">
                        <span class="product__category">${category}</span>
                        <span class="dot"></span>
                        <span class="product__date">Spring 23</span>
                    </div>

                    <div class="product__price-block d-flex items-center">
                        ${this.setProductPrice(price, 180000)}
                    </div>

                    ${this.productAvalible(productAvalible)}

                </div>

            </div>


        </div>
    
        `
    }

}

export default CreateProductCard;