'use strict';

const message = document.querySelector('.message');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector(".submit-btn");
const close = document.querySelector(".close-message");

const openMsg = function () {
    message.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  const closeMsg = function () {
    message.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  btn.addEventListener('click', openMsg);
  close.addEventListener('click', closeMsg);
