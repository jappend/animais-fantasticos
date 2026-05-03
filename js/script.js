import SmoothScroll from "./modules/scroll-suave.js";
import initScrollAnimation from "./modules/scroll-animation.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
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

initScrollAnimation();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
