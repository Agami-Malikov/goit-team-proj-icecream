
$('.cust-reviews__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: false,
});

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-desk-open]"),
    closeModalBtn: document.querySelector("[data-desk-close]"),
    modal: document.querySelector("[data-desk]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("open");
  }
})();


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-desk-open2]"),
    closeModalBtn: document.querySelector("[data-desk-close2]"),
    modal: document.querySelector("[data-desk2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("open2");
  }
})();


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-desk-open3]"),
    closeModalBtn: document.querySelector("[data-desk-close3]"),
    modal: document.querySelector("[data-desk3]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("open3");
  }
})();


