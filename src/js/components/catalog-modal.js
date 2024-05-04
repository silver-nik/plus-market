import Services from "../helpers/services"

const defaultTitle = 'Каталог';

const setCard = (name) => {
    return (`
        <div class="catalog-mobile__category-item">
            <div class="category-item__img">
                <img src="./images/image-32.webp" alt="" srcset="">
            </div>
            <div class="category-item__wrapper">
                <span class="category-item__title">${name}</span>
                <span class="category-item__counter">875</span>
            </div>
        </div>
    `)
}

const clearSubMenu = () => {
    const submenu = document.querySelector('.catalog-mobile__submenu');
    submenu.innerHTML = '';
};

const setSubMenu = (categories) => {
    const submenu = document.querySelector('.catalog-mobile__submenu');
    return categories.map(cat => {
        return submenu.innerHTML += setCard(cat);
    });
};

const updateModalTitle = (titleWrapper, title = defaultTitle) => {
    titleWrapper.textContent = title;
};

const toggleElementsVisibility = (wrapper, submenu, backBtn, showWrapper) => {
    wrapper.classList.toggle('hidden', showWrapper);
    submenu.classList.toggle('hidden', !showWrapper);
    backBtn.classList.toggle('hidden', !showWrapper);
};

const catalogModal = ({modal, triggers}) => {
    const triggersArr = document.querySelectorAll(triggers);
    const modalContainer = document.querySelector(modal),
          modalTitle = modalContainer.querySelector('.catalog-title'),
          modalClose = modalContainer.querySelector('.close-btn'),
          modalBackBtn = modalContainer.querySelector('.back-btn');
    

    triggersArr.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            Services.getAllCategories()
                .then((categories, i) => {

                    clearSubMenu();
                    setSubMenu(categories);

                })
                .then(() => {
                    updateModalTitle(modalTitle,  e.target.closest('[catalog-name]').getAttribute("catalog-name"));
                    toggleElementsVisibility(modalContainer.querySelector('.catalog-mobile__wrapper'), modalContainer.querySelector('.catalog-mobile__submenu'), modalBackBtn, true);
                })
        })
    })
    
    try {
        [modalClose, modalBackBtn].forEach(btn => {
            btn.addEventListener('click', () => {
                updateModalTitle(modalTitle);
                toggleElementsVisibility(modalContainer.querySelector('.catalog-mobile__wrapper'), modalContainer.querySelector('.catalog-mobile__submenu'), modalBackBtn, false);
                clearSubMenu();
            });
        })
    } catch(e) {}

}

catalogModal({
    modal: '.catalog-modal .catalog-mobile',
    triggers: 'a[catalog-name]',
    limit: '', 
    categoryName: ''
})