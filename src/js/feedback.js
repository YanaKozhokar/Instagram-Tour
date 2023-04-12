const feedbackModal = document.querySelector('.modal__backdrop');
const openModalBtn = document.querySelector('.feedback__button');
const closeModalBtn = document.querySelector('.modal__close-btn');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  feedbackModal.classList.toggle('is-hidden');

  !feedbackModal.classList.contains('is-hidden')
    ? (document.querySelector('body').style.overflow = 'hidden')
    : (document.querySelector('body').style.overflow = 'visible');
}
