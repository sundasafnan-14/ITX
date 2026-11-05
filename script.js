const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  mainNav.classList.toggle("is-open", !isOpen);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    mainNav.classList.remove("is-open");
  });
});

const quoteDialog = document.querySelector(".quote-dialog");
const quoteForm = document.querySelector(".quote-form");

document.querySelectorAll('a[href="#contact"], .product-card').forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.classList.contains("product-card")) {
      event.preventDefault();
      quoteForm.elements.details.value = `I'm interested in ${link.dataset.product}.`;
    }
    event.preventDefault();
    quoteDialog.showModal();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => quoteDialog.close());
quoteDialog.addEventListener("click", (event) => {
  if (event.target === quoteDialog) quoteDialog.close();
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  quoteForm.querySelector(".quote-message").textContent = "Thanks! This demo form is ready to connect to your quote-request service.";
  quoteForm.reset();
});

document.querySelector(".subscribe-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  form.nextElementSibling.textContent = "This demo form is ready to connect to your mailing list.";
  form.reset();
});

document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    document.querySelectorAll(".dot").forEach((item) => {
      item.classList.remove("is-current");
      item.setAttribute("aria-pressed", "false");
    });
    dot.classList.add("is-current");
    dot.setAttribute("aria-pressed", "true");
    const cards = document.querySelectorAll(".quote-card");
    if (window.matchMedia("(max-width: 650px)").matches) {
      cards.forEach((card, cardIndex) => {
        card.hidden = cardIndex !== index;
      });
    }
  });
});
