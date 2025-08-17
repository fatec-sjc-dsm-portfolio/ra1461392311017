document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("projetos-carousel");
  if (!carousel) {
    console.error("Carrossel não encontrado no DOM.");
    return;
  }

  const carouselInner = carousel.querySelector(".carousel-inner");
  const prevBtn = carousel.querySelector(".carousel-control-prev");
  const nextBtn = carousel.querySelector(".carousel-control-next");
  let currentIndex = 0;
  let itemsPerPage = 1;

  const updateItemsPerPage = () => {
    if (window.innerWidth >= 992) {
      itemsPerPage = 1;
    } else {
      itemsPerPage = 1;
    }
  };

  updateItemsPerPage();
  window.addEventListener("resize", updateItemsPerPage);
  const slides = Array.from(carouselInner.querySelectorAll(".carousel-item"));
  const totalSlides = slides.length;

  /**
   * @param {number}
   */
  const showSlide = (index) => {
    slides.forEach((slide) => slide.classList.remove("active"));

    slides[index].classList.add("active");
  };

  if (totalSlides > 0) {
    showSlide(currentIndex);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    });
  }
});
