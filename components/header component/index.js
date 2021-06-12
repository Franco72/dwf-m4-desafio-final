function modifyHeader(actualPage) {
  let firstLink = "./portfolio.html";
  let firstTitleLink = "Portfolio";
  let secondLink = "./index.html#cards";
  let secondTitleLink = "Servicios";
  if (actualPage.toLowerCase() == "portfolio") {
    firstLink = "./index.html";
    firstTitleLink = "Inicio";
    secondLink = "./portfolio.html#cards";
    secondTitleLink = "Mis trabajos";
  }
  if (
    actualPage.toLowerCase() == "contact" ||
    actualPage.toLowerCase() == "contacto"
  ) {
    firstLink = "./index.html";
    firstTitleLink = "Inicio";
    secondLink = "./portfolio.html";
    secondTitleLink = "Portfolio";
  }
  return {
    firstLink: firstLink,
    firstTitleLink: firstTitleLink,
    secondLink: secondLink,
    secondTitleLink: secondTitleLink,
  };
}
function headerComponent(containerEl, actualPage) {
  // esta función modifica los links y títulos del header según la página actual, y los devuelve en forma de objeto
  const headerLinks = modifyHeader(actualPage);
  const newHeaderComponent = document.createElement("div");
  newHeaderComponent.innerHTML = `<header>
  <nav class="menu">
    <img
      src="https://i.postimg.cc/ryG4Sjfk/logo-franco.png"
      alt="Logo Franco"
      class="menu__logo"
    />
    <ul class="menu__items">
      <li>
        <a href=${headerLinks.firstLink}>${headerLinks.firstTitleLink}</a>
      </li>
      <li>
        <a href=${headerLinks.secondLink} class="menu__item--services">${headerLinks.secondTitleLink}</a>
      </li>
      <li>
        <a href="./contact.html">Contacto</a>
      </li>
    </ul>
    <div class="btn-menu">
      <i class="btn-menu__icon fa fa-bars"></i>
    </div>
  </nav>
  </header>
`;
  containerEl.appendChild(newHeaderComponent);
  // oculto o muestro la navegación del header
  const btn = document.querySelector(".btn-menu");
  const btnItem = document.querySelector(".btn-menu__icon ");
  if (btn) {
    btn.addEventListener("click", () => {
      const menu__items = document.querySelector(".menu__items");
      menu__items.classList.toggle("show");

      btnItem.classList.toggle("fa-times");
    });
  }
  // esto es para evitar que, al clikear para ir a las cards el header se quede pegado
  const servicesLink = document.querySelector(".menu__item--services");
  servicesLink.addEventListener("click", () => {
    const menu__items = document.querySelector(".menu__items");
    menu__items.classList.toggle("show");
    btnItem.classList.toggle("fa-times");
  });
}
