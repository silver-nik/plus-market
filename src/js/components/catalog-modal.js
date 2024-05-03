import Services from "../helpers/services"

const setCard = (name) => {
    return (`
        <div class="catalog-mobile__category-item">
            <div class="category-item__img">
                <img src="../images/image-32.webp" alt="" srcset="">
            </div>
            <div class="category-item__wrapper">
                <span class="category-item__title">${name}</span>
                <span class="category-item__counter">875</span>
            </div>
        </div>
    `)
}

let catalogModal = ({modal, triggers, limit, categoryName}) => {
    const triggersArr = document.querySelectorAll(triggers);
    const modalContainer = document.querySelector(modal),
          modalTitle = modalContainer.querySelector('.catalog-title'),
          modalClose = modalContainer.querySelectorAll('.close-btn'),
          modalBackBtn = modalContainer.querySelector('.back-btn');

    triggersArr.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            Services.getAllCategories()
                .then((categories, i) => {
                    categories.map(cat => {
                        modalContainer.querySelector('.catalog-mobile__submenu').innerHTML += setCard(cat)
                    })
                })
                .then(() => {
                    modalTitle.textContent = e.target.closest('[catalog-name]').getAttribute("catalog-name"); 
                    modalBackBtn.classList.remove("hidden");

                    modalContainer.querySelector('.catalog-mobile__wrapper').classList.add('hidden');
                    modalContainer.querySelector('.catalog-mobile__submenu').classList.remove('hidden');
                })
        })
    })

    modalClose.forEach(el => {
        el.addEventListener('click', (e) => {
            
            modalTitle.textContent = 'Каталог'; 

            modalContainer.querySelector('.catalog-mobile__wrapper').classList.remove('hidden');
            modalContainer.querySelector('.catalog-mobile__submenu').classList.add('hidden');
            modalContainer.querySelector('.catalog-mobile__submenu').innerHTML = '';

            modalBackBtn.classList.add('hidden');

        })
    })

    modalBackBtn.addEventListener('click', (e) => {
        e.preventDefault();

        modalTitle.textContent = 'Каталог'; 

        modalContainer.querySelector('.catalog-mobile__wrapper').classList.remove('hidden');
        modalContainer.querySelector('.catalog-mobile__submenu').classList.add('hidden');
        modalContainer.querySelector('.catalog-mobile__submenu').innerHTML = '';

        modalBackBtn.classList.add('hidden');

    })
   

}

catalogModal({
    modal: '.catalog-modal .catalog-mobile',
    triggers: 'a[catalog-name]',
    limit: '', 
    categoryName: ''
})