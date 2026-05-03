import SmoothScroll from "./modules/scroll-suave.js";
import initScrollAnimation from "./modules/scroll-animation.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import Accordion from "./modules/accordion.js";

const smoothScroll = new SmoothScroll('[data-js="menu"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-js="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-js="tabmenu"] li',
  '[data-js="tabcontent"] section',
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initScrollAnimation();
