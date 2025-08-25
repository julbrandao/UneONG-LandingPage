document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".carroussel .card");
  const indicators = document.querySelectorAll(".indicators span");
  let currentIndex = 1; // começa no segundo card

  function updateCarousel(index) {
    cards.forEach((card, i) => {
      card.classList.remove("prev", "active", "next");
      const icon = card.querySelector(".icon-circle");
      if (icon) icon.style.display = "none";

      if (i === index) {
        card.classList.add("active");
        if (icon) icon.style.display = "block";
      } else if (i === (index - 1 + cards.length) % cards.length) {
        card.classList.add("prev");
      } else if (i === (index + 1) % cards.length) {
        card.classList.add("next");
      }
    });

    // Atualiza indicadores
    indicators.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentIndex = index;
  }

  // Clique nos cards laterais
  cards.forEach((card, i) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("prev")) {
        updateCarousel((currentIndex - 1 + cards.length) % cards.length);
      } else if (card.classList.contains("next")) {
        updateCarousel((currentIndex + 1) % cards.length);
      }
    });
  });

  // Clique nos indicadores
  indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      updateCarousel(i);
    });
  });

  // Inicializa
  updateCarousel(currentIndex);
});

// --------------------FAQ--------------------------

  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach(header => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const icon = header.querySelector("i");

      // Fecha os outros abertos (opcional, se quiser só um aberto por vez)
      document.querySelectorAll(".accordion-body.active").forEach(openBody => {
        if (openBody !== body) {
          openBody.classList.remove("active");
          openBody.style.height = "0";
          openBody.style.opacity = "0";
          openBody.previousElementSibling.querySelector("i").classList.remove("rotated");
        }
      });

      // Toggle do item clicado
      if (body.classList.contains("active")) {
        body.classList.remove("active");
        body.style.height = "0";
        body.style.opacity = "0";
        icon.classList.remove("rotated");
      } else {
        body.classList.add("active");
        body.style.height = body.scrollHeight + "px";
        body.style.opacity = "1";
        icon.classList.add("rotated");
      }
    });
  });
