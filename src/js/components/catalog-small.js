import Services from "../helpers/services";
import SmallSlider from "./small-slider";
import MediumSlider from "./medium-slider";

import CreateProductCard from "../helpers/createProdcutCard";

let setSlider = ({containerName, navObj = {}, categoryName, limitProducts, sliderSize}) => {

    let parent = document.querySelector(`${containerName}`);

    Services.getAllProducts(limitProducts, categoryName)
        .then((products, i) => {

            let sliderWrapper = parent.querySelector('.swiper-wrapper');

            products.forEach(item => {
                sliderWrapper.innerHTML += new CreateProductCard(item, sliderSize).init()
            })

            switch(sliderSize) {
                case 'md':
                    new MediumSlider(
                        containerName, 
                        navObj.nextBtn, 
                        navObj.prevBtn
                    ).init()
                    break;
                case '': 
                    new SmallSlider(
                        containerName, 
                        navObj.nextBtn, 
                        navObj.prevBtn
                    ).init()    
                    break;
            }

        })

}

setSlider({

    containerName: "#popular-slider", 
    navObj: {
        nextBtn: '.popularProducts-right',
        prevBtn: '.popularProducts-left'
    },
    categoryName: "electronics", 
    limitProducts: 5,
    sliderSize: ""

})

setSlider({

    containerName: "#newProducts-slider", 
    navObj: {
        nextBtn: '.newProducts-right',
        prevBtn: '.newProducts-left'
    },
    categoryName: "", 
    limitProducts: "",
    sliderSize: ""

})

setSlider({

    containerName: "#collection-slider", 
    navObj: {
        nextBtn: '.collection-slider-next',
        prevBtn: '.collection-slider-prev'
    },
    categoryName: "", 
    limitProducts: "",
    sliderSize: "md"

})