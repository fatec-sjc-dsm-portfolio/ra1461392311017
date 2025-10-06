import {
  projetos,
  projetosAPI,
  projetosAcademicos,
  imagensProjetos,
  linksProjetos,
  fundamentos,
  habilidadesComportamentais,
} from "./data.js";

let currentProjectIndex = 0;
let currentProjectCategory = "api"; // 'api' ou 'academic'

function createProjetoContentHTML(projeto, link) {
  const tecnologiasHtml = projeto.tecnologias
    .map((tec) => `<span class="badge">${tec}</span>`)
    .join("");

  // Adicionar informações específicas do projeto
  let infoAdicional = "";
  if (projeto.categoria === "API") {
    infoAdicional = `<p class="project-info"><strong>Semestre:</strong> ${projeto.semestre}</p>`;
    if (projeto.parceria) {
      infoAdicional += `<p class="project-info"><strong>Parceria:</strong> ${projeto.parceria}</p>`;
    }
  } else if (projeto.categoria === "Acadêmico") {
    infoAdicional = `<p class="project-info"><strong>Matéria:</strong> ${projeto.materia}</p>`;
  }

  return `
        <h2 class="titulo project-title">${projeto.titulo}</h2>
        <p class="project-description">${projeto.descricao}</p>
        ${infoAdicional}
        <div class="project-techs">${tecnologiasHtml}</div>
        <hr />
        <h3 class="titulo-detalhe">Minha Contribuição</h3>
        <p class="project-contribution">${projeto.contribuicao}</p>
        <hr />
        <h3 class="titulo-detalhe">Desafios e Aprendizados</h3>
        <p class="project-contribution">${projeto.dificuldade}</p>
        <a href="${link}" target="_blank" rel="noopener noreferrer" class="project-link">Ver Detalhes do Projeto</a>
    `;
}

function getCurrentProjects() {
  return currentProjectCategory === "api" ? projetosAPI : projetosAcademicos;
}

function getCurrentImages() {
  if (currentProjectCategory === "api") {
    return imagensProjetos.slice(0, 4); // Primeiras 4 imagens para APIs
  } else {
    return imagensProjetos.slice(4, 6); // Últimas 2 imagens para acadêmicos
  }
}

function getCurrentLinks() {
  if (currentProjectCategory === "api") {
    return linksProjetos.slice(0, 4); // Primeiros 4 links para APIs
  } else {
    return linksProjetos.slice(4, 6); // Últimos 2 links para acadêmicos
  }
}

function updateProjectContent() {
  const projectDetailsContainer = document.getElementById(
    "project-details-container"
  );
  const projectActiveImage = document.querySelector(".project-active-image");
  const projectCounter = document.getElementById("project-counter");

  const currentProjects = getCurrentProjects();
  const currentImages = getCurrentImages();
  const currentLinks = getCurrentLinks();

  const projeto = currentProjects[currentProjectIndex];
  const imagem = currentImages[currentProjectIndex];
  const link = currentLinks[currentProjectIndex];

  projectDetailsContainer.classList.add("changing");
  projectActiveImage.classList.add("changing");

  setTimeout(() => {
    projectDetailsContainer.innerHTML = createProjetoContentHTML(projeto, link);
    projectActiveImage.src = imagem;
    projectActiveImage.alt = projeto.titulo;
    projectCounter.textContent = `${currentProjectIndex + 1} / ${
      currentProjects.length
    }`;

    projectDetailsContainer.classList.remove("changing");
    projectActiveImage.classList.remove("changing");
  }, 200);
}

function switchProjectCategory(category) {
  currentProjectCategory = category;
  currentProjectIndex = 0;
  updateProjectContent();

  // Atualizar botões de categoria
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  if (category === "api") {
    document.getElementById("api-projects-btn").classList.add("active");
  } else {
    document.getElementById("academic-projects-btn").classList.add("active");
  }
}

function createFundamentosHTML() {
  const fundContainer = document.getElementById("fundamentos-container");

  const fundHTML = fundamentos
    .map(
      (categoria) => `
    <div class="fundamento-categoria">
      <div class="fundamento-titulo">${categoria.categoria}</div>
      <ul class="fundamento-lista">
        ${categoria.habilidades
          .map(
            (habilidade) => `
          <li class="fundamento-item">${habilidade}</li>
        `
          )
          .join("")}
      </ul>
    </div>
  `
    )
    .join("");

  fundContainer.innerHTML = fundHTML;
}

function createComportamentaisHTML() {
  const compContainer = document.getElementById("comportamentais-container");

  const compHTML = habilidadesComportamentais
    .map(
      (habilidade) => `
    <div class="habilidade-item">
      <div class="habilidade-header">
        <h3 class="habilidade-nome">${habilidade.habilidade}</h3>
        <span class="habilidade-nivel ${habilidade.nivel
          .toLowerCase()
          .replace("ç", "c")}">${habilidade.nivel}</span>
      </div>
      <p class="habilidade-descricao">${habilidade.descricao}</p>
    </div>
  `
    )
    .join("");

  compContainer.innerHTML = compHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  const allScrollPages = document.querySelectorAll(".scroll-page");
  const navLinks = document.querySelectorAll("#main-nav a");
  const prevProjectBtn = document.getElementById("prev-project-btn");
  const nextProjectBtn = document.getElementById("next-project-btn");

  // Observer para animar seções ao entrar na tela
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const navLink = document.querySelector(
          `#main-nav a[href="#${entry.target.id}"]`
        );
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          if (navLink) {
            navLinks.forEach((link) => link.classList.remove("nav-active"));
            navLink.classList.add("nav-active");
          }
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.6 }
  );

  allScrollPages.forEach((section) => observer.observe(section));

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Event listeners para botões de categoria
  document.getElementById("api-projects-btn").addEventListener("click", () => {
    switchProjectCategory("api");
  });

  document
    .getElementById("academic-projects-btn")
    .addEventListener("click", () => {
      switchProjectCategory("academic");
    });

  nextProjectBtn.addEventListener("click", () => {
    const currentProjects = getCurrentProjects();
    currentProjectIndex++;
    if (currentProjectIndex >= currentProjects.length) {
      currentProjectIndex = 0;
    }
    updateProjectContent();
  });

  prevProjectBtn.addEventListener("click", () => {
    const currentProjects = getCurrentProjects();
    currentProjectIndex--;
    if (currentProjectIndex < 0) {
      currentProjectIndex = currentProjects.length - 1;
    }
    updateProjectContent();
  });

  // Inicializar conteúdo
  document.getElementById("intro-section").classList.add("active");
  createFundamentosHTML();
  createComportamentaisHTML();
  updateProjectContent();
});
