(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }

  const order = {
    //Додати атрибут data-modal-order-open на кнопку відкриття order window
    openOrderBtnHeader: document.querySelector('[data-modal-order-open]'),
    openOrderBtnHero: document.querySelector('[data-order-open]'),
    openOrderBtnAbout: document.querySelector('[data-about-order-open]'),
    // Додати атрибут data-modal-order-close на кнопку закриття order window
    closeOrderlBtn: document.querySelector('[data-modal-order-close]'),
    // Додати атрибут data-modal-order на бекдроп модалки order window
    modalOrder: document.querySelector('[data-modal-order]'),
  };

  order.openOrderBtnHeader.addEventListener('click', toggleOrderOpen);
  order.openOrderBtnHero.addEventListener('click', toggleOrderOpen);
  order.openOrderBtnAbout.addEventListener('click', toggleOrderOpen);
  order.closeOrderlBtn.addEventListener('click', toggleOrderOpen);
  function toggleOrderOpen() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    order.modalOrder.classList.toggle('is-open');
  }
})();
