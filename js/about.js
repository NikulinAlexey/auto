const generalInfoBtn = document.querySelector('.about-company__general');
const historyInfoBtn = document.querySelector('.about-company__history');
const indicatorsInfoBtn = document.querySelector('.about-company__indicators');

const generalnfoBlock = document.querySelector('.about-company__general-text');
const historyInfoBlock = document.querySelector('.about-company__history-text');
const indicatorsInfoBlock = document.querySelector('.about-company__indicators-text');

function makeBtnActive(btn) {
  btn.classList.add('about-company__button_type_avtive')
}

generalInfoBtn.addEventListener('click', function () {
  makeBtnActive(generalInfoBtn);
  historyInfoBtn.classList.remove('about-company__button_type_avtive');
  indicatorsInfoBtn.classList.remove('about-company__button_type_avtive');

  generalnfoBlock.classList.add('about-company__block-active');
  historyInfoBlock.classList.remove('about-company__block-active');
  indicatorsInfoBlock.classList.remove('about-company__block-active');
});

historyInfoBtn.addEventListener('click', function () {
  makeBtnActive(historyInfoBtn);
  generalInfoBtn.classList.remove('about-company__button_type_avtive');
  indicatorsInfoBtn.classList.remove('about-company__button_type_avtive');

  historyInfoBlock.classList.add('about-company__block-active');
  generalnfoBlock.classList.remove('about-company__block-active');
  indicatorsInfoBlock.classList.remove('about-company__block-active');

});

indicatorsInfoBtn.addEventListener('click', function () {
  makeBtnActive(indicatorsInfoBtn);
  generalInfoBtn.classList.remove('about-company__button_type_avtive');
  historyInfoBtn.classList.remove('about-company__button_type_avtive');

  indicatorsInfoBlock.classList.add('about-company__block-active');
  generalnfoBlock.classList.remove('about-company__block-active');
  historyInfoBlock.classList.remove('about-company__block-active');
});