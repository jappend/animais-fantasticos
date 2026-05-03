import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // puxa os animais através de um arquivo json
  async function criarAnimais() {
    try {
      // fetch e espera a resposta
      const animaisResponse = await fetch(url);
      // transforma a resposta em JSON
      const animaisJSON = await animaisResponse.json();

      // após a transformação de JSON, ativar funções para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (error) {
      console.log(Error(error));
    }
  }

  const numerosGrid = document.querySelector(target);

  // preenche cada animal no DOM
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  return criarAnimais();
}
