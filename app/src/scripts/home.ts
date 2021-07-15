const tl = new TimelineMax();

const introTitle = document.querySelector('.intro__title');
const introSubtitle = document.querySelector('.intro__subtitle');
const introBtn = document.querySelector('.intro__btn');

tl.fromTo(introTitle, 0.8, { transform: 'scale(0)', opacity: '0' }, { transform: 'scale(1)', opacity: '1', ease: Power2.easeInOut })
  .fromTo(introSubtitle, 0.8, { y: -30, opacity: '0' }, { y: 0, opacity: '1', ease: Power2.easeInOut })
  .fromTo(introBtn, 0.8, { y: 30, opacity: '0' }, { y: 0, opacity: '1', ease: Power2.easeInOut })