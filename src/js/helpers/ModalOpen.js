class ModalOpen {
    constructor(trigger, triggerClose, modalName, activeClass) {
        this.trigger = document.querySelector(trigger);
        this.triggerClose = document.querySelector(triggerClose);
        this.modal = document.querySelector(modalName);
        this.activeClass = activeClass;
    }

    addEventToTrigger = () => {
        [this.trigger, this.triggerClose].forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                
                this.trigger.classList.toggle('active');
                this.modal.classList.toggle('hidden');
                document.querySelector('.overlay').classList.toggle('active');

                if(this.trigger.classList.contains('active')) {
                    this.trigger.querySelector('span').textContent = 'Закрыть'
                } else {
                    this.trigger.querySelector('span').textContent = 'Каталог'
                }

            })
        })


    }

}

export default ModalOpen;