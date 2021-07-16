// Header Menu
const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__list");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

const link1: HTMLAnchorElement = document.querySelector('.link-1');
const link2: HTMLAnchorElement = document.querySelector('.link-2');
const link3: HTMLAnchorElement = document.querySelector('.link-3');
const link4: HTMLAnchorElement = document.querySelector('.link-4');
const link5: HTMLAnchorElement = document.querySelector('.link-5');
const link6: HTMLAnchorElement = document.querySelector('.link-6');
const link7: HTMLAnchorElement = document.querySelector('.link-7');
const link8: HTMLAnchorElement = document.querySelector('.link-8');
const link9: HTMLAnchorElement = document.querySelector('.link-9');
const link10: HTMLAnchorElement = document.querySelector('.link-10');
const link11: HTMLAnchorElement = document.querySelector('.link-11');
const link12: HTMLAnchorElement = document.querySelector('.link-12');


link1.onclick = menuToggle;
link2.onclick = menuToggle;
link3.onclick = menuToggle;
link4.onclick = menuToggle;
link5.onclick = menuToggle;
link6.onclick = menuToggle;
link7.onclick = menuToggle;
link8.onclick = menuToggle;
link9.onclick = menuToggle;
link10.onclick = menuToggle;
link11.onclick = menuToggle;
link12.onclick = menuToggle;
