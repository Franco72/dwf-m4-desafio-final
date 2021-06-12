(async function main() {
  // agregando el componente "Header"
  const headerContainer = document.getElementById("header-container");
  headerComponent(headerContainer, "contact");
  // agregando el componente "Contact"
  const contactContainer = document.getElementById("contact-container");
  contactComponent(contactContainer);
  // agregando el componente "Footer"
  const footerContainer = document.getElementById("footer-container");
  footerComponent(footerContainer);
})();
