const btnPopupClose = document.querySelector('.popup__close-icon');
const btnPopupOrderOpen = document.querySelector('.card__request');
const btnPopupOfferOpen = document.querySelector('.card__details');
const popupOrder = document.querySelector('.popup_type_order');
const popupOffer = document.querySelector('.popup_type_offer');



btnPopupClose.addEventListener('click', function () {
  popupOrder.classList.remove('popup_type_opened');
});

btnPopupOrderOpen.addEventListener('click', function () {
  popupOrder.classList.add('popup_type_opened');
});

btnPopupOfferOpen.addEventListener('click', function() {
  popupOffer.classList.add('popup_type_opened');
})
