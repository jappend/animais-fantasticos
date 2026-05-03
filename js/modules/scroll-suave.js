export default function initSmoothScroll() {
  const linksInternos = document.querySelectorAll(
    '[data-js="menu"] a[href^="#"]',
  );

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    /*   window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    }); */

    // opção alternativa

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
