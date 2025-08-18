import { projetos, imagensProjetos, linksProjetos } from "./data.js";

let currentProjectIndex = -1;

function createProjetoContentHTML(projeto, link) {
  const tecnologiasHtml = projeto.tecnologias
    .map((tec) => `<span class="badge">${tec}</span>`)
    .join("");
  return `
        <h2 class="titulo project-title">${projeto.titulo}</h2>
        <p class="project-description">${projeto.descricao}</p>
        <div class="project-techs">${tecnologiasHtml}</div>
        <hr />
        <p>${projeto.contribuicao}</p>
        <hr />
        <a href="${link}" target="_blank" rel="noopener noreferrer" class="project-link">Ver Detalhes</a>
    `;
}

function updateProjectContent(
  index,
  projectDetailsContainer,
  projectActiveImage
) {
  if (index === currentProjectIndex) return;
  currentProjectIndex = index;

  const projeto = projetos[currentProjectIndex];
  const imagem = imagensProjetos[currentProjectIndex];
  const link = linksProjetos[currentProjectIndex];

  projectDetailsContainer.classList.add("changing");
  projectActiveImage.classList.add("changing");

  setTimeout(() => {
    projectDetailsContainer.innerHTML = createProjetoContentHTML(projeto, link);
    projectActiveImage.src = imagem;
    projectActiveImage.alt = projeto.titulo;

    projectDetailsContainer.classList.remove("changing");
    projectActiveImage.classList.remove("changing");
  }, 200);
}

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const navLinks = document.querySelectorAll("#main-nav a");
  const mainSections = {
    intro: document.getElementById("intro-section"),
    about: document.getElementById("about-me-section"),
    projects: document.getElementById("projects-main-section"),
    skills: document.getElementById("skills-main-section"),
  };
  const projectTriggersContainer = document.querySelector(
    ".project-triggers-container"
  );
  const projectDetailsContainer = document.getElementById(
    "project-details-container"
  );
  const projectActiveImage = document.querySelector(".project-active-image");

  if (projetos.length > 0) {
    mainSections.projects.style.height = `${projetos.length * 100}vh`;
  }

  const projectTriggers = projetos.map((projeto, index) => {
    const trigger = document.createElement("div");
    trigger.className = "project-trigger";
    trigger.dataset.index = index;
    projectTriggersContainer.appendChild(trigger);
    return trigger;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const intersectingEntries = entries.filter((e) => e.isIntersecting);
      if (intersectingEntries.length === 0) return;

      const lastVisibleEntry =
        intersectingEntries[intersectingEntries.length - 1];
      const target = lastVisibleEntry.target;
      let activeSectionId = "";

      if (target.matches(".project-trigger")) {
        activeSectionId = "projects-main-section";
        const projectIndex = parseInt(target.dataset.index, 10);
        updateProjectContent(
          projectIndex,
          projectDetailsContainer,
          projectActiveImage
        );
      } else {
        activeSectionId = target.id;
      }

      Object.values(mainSections).forEach((section) => {
        section.classList.toggle("active", section.id === activeSectionId);
      });

      navLinks.forEach((link) => {
        link.classList.toggle(
          "nav-active",
          link.getAttribute("href") === `#${activeSectionId}`
        );
      });
    },
    { threshold: 0.5 }
  );

  function startExperience(isMenuClick = false, targetSection = null) {
    if (body.classList.contains("is-interactive")) return;

    body.classList.add("is-interactive");

    const firstSectionToShow = targetSection || mainSections.intro;

    firstSectionToShow.classList.add("active");
    updateActiveNavLink(firstSectionToShow.id);
  }

  window.addEventListener("wheel", () => startExperience(), { once: true });
  window.addEventListener("touchstart", () => startExperience(), {
    once: true,
  });
  window.addEventListener("keydown", () => startExperience(), { once: true });

  function updateActiveNavLink(activeId) {
    navLinks.forEach((link) => {
      link.classList.toggle(
        "nav-active",
        link.getAttribute("href") === `#${activeId}`
      );
    });
  }

  Object.values(mainSections).forEach((section) => observer.observe(section));
  projectTriggers.forEach((trigger) => observer.observe(trigger));
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      startExperience(true, targetSection);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
