const BtnChatRoll = document.querySelector('.chat__roll-icon');
const BtnChatClose = document.querySelector('.chat__close-icon');
const BtnChatOpen = document.querySelector('.header__chat');
const chatWindow = document.querySelector('.chat');



BtnChatRoll.addEventListener('click', function () {
  document.querySelector('.chat__rolling-window').classList.toggle('chat__rolling-window_type_closed');
});

BtnChatClose.addEventListener('click', function () {
  chatWindow.classList.add('chat_type_closed')
});

BtnChatOpen.addEventListener('click', function () {
  chatWindow.classList.toggle('chat_type_closed');
});