// do something!
; (function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target);
  };

  let toggleStatus = (window.localStorage.getItem('status')) ? true : false;
  const toggleButton = get('.toggle');
  const nav = get('nav');

  //처음 접속 시 
  if (toggleStatus) {
    toggleStatus = "active";
    nav.classList.add('active');
  }

  const toggleOpen = () => {

    document.body.classList.remove('preload');
    if (toggleStatus) {
      toggleStatus = "";
      nav.classList.remove('active');
    } else {
      toggleStatus = "active";
      nav.classList.add('active');
    }
    window.localStorage.setItem('status', toggleStatus);

  };

  toggleButton.addEventListener('click', toggleOpen);

})()