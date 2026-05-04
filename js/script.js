import SmoothScroll from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/scroll-anima.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import Accordion from "./modules/accordion.js";
import DropdownMenu from "./modules/dropdown.js";

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

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const dropdown = new DropdownMenu("[data-dropdown]");
dropdown.init();

initMenuMobile();
initFuncionamento();
fetchAnimais("../../animais-mock-api.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const scrollAnima = new ScrollAnima('[data-js="scroll"]');
scrollAnima.init();
