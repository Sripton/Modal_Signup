window.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal"),
    btnModal = document.querySelector("#open"),
    modal__close = document.querySelector(".modal__close");

  function openModal() {
    modal.style.display = "block";
  }
  function closeModal() {
    modal.style.display = "none";
  }
  btnModal.addEventListener("click", () => {
    openModal();
  });
  modal__close.addEventListener("click", () => {
    closeModal();
  });
});
