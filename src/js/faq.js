const accordion = document.querySelector('.faq__accordion');

accordion.addEventListener('click', onAccordionClick);

function onAccordionClick(event) {
  if (
    event.target
      .closest('.faq__accordion-item')
      .querySelector('.faq__accordeon-answer')
      .classList.contains('is-hidden')
  ) {
    event.target
      .closest('.faq__accordion-item')
      .querySelector('.faq__accordion-icon').style =
      'transform: rotate(180deg);';
  } else {
    event.target
      .closest('.faq__accordion-item')
      .querySelector('.faq__accordion-icon').style = 'transform: rotate(0);';
  }

  event.target
    .closest('.faq__accordion-item')
    .querySelector('.faq__accordeon-answer')
    .classList.toggle('is-hidden');
}
