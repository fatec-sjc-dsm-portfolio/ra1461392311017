import { projetos, imagensProjetos, linksProjetos } from "./data.js";

/**
 * @param {Object} projeto -
 * @param {string} imagem -
 * @param {string} link -
 * @returns {string} O HTML do card do projeto.
 */
function createProjetoCardHTML(projeto, imagem, link) {
  const checkIcon = '<i class="fas fa-check-circle" style="color: green;"></i>';

  const starIcon = '<i class="fas fa-star star-icon"></i>';
  const halfStarIcon = '<i class="fas fa-star-half-alt star-icon"></i>';

  const renderStars = (count) => {
    let starsHtml = "";
    for (let i = 0; i < count; i++) {
      starsHtml += halfStarIcon;
    }
    return starsHtml;
  };

  const tecnologiasHtml = projeto.tecnologias
    .map(
      (tec) => `
        <span class="badge badge-primary mr-1">
            ${tec}
        </span>
    `
    )
    .join("");

  return `
        <div class="col-md-4 mb-3">
            <a class="link" href="${link}" target="_blank" rel="noopener noreferrer">
                <div class="card">
                    <img class="img-fluid" alt="${
                      projeto.titulo
                    }" src="${imagem}" />
                    <div class="card-body">
                        <h4 class="card-title">${projeto.titulo}</h4>
                        <p class="card-text">${projeto.descricao}</p>
                        <div class="mb-2">
                            ${tecnologiasHtml}
                        </div>
                        <hr />
                        <p class="contribuicao-text">${projeto.contribuicao}</p>
                        <hr />
                        <p class="contribuicao-text">${projeto.dificuldade}</p>
                        <hr />
                        <p class="contribuicao-text-desc">
                            Clique aqui para saber mais sobre o projeto!
                        </p>
                        <div class="small-participation">
                            ${renderStars(5)} Pró Atividade <br />
                            ${renderStars(5)} Autonomia <br />
                            ${renderStars(5)} Colaboração <br />
                            ${renderStars(5)} Entrega de Resultados <br />
                            <hr />
                            Projeto Concluído ${checkIcon}
                            <br />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
}

function renderProjetos() {
  const carouselInner = document.querySelector(
    "#projetos-carousel .carousel-inner"
  );
  if (!carouselInner) {
    console.error("Elemento '.carousel-inner' não encontrado.");
    return;
  }
  carouselInner.innerHTML = "";

  const cardsPerSlide = 3;
  let currentSlideHtml = "";
  let slideCount = 0;

  projetos.forEach((projeto, index) => {
    currentSlideHtml += createProjetoCardHTML(
      projeto,
      imagensProjetos[index],
      linksProjetos[index]
    );

    if ((index + 1) % cardsPerSlide === 0 || index === projetos.length - 1) {
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");
      if (slideCount === 0) {
        carouselItem.classList.add("active");
      }
      carouselItem.innerHTML = `<div class="row carousel-slide-group">${currentSlideHtml}</div>`;
      carouselInner.appendChild(carouselItem);
      currentSlideHtml = "";
      slideCount++;
    }
  });
}

document.addEventListener("DOMContentLoaded", renderProjetos);
