function headerComponent(containerEl) {
  const newHeaderComponent = document.createElement("div");
  newHeaderComponent.innerHTML = `
  <nav class="menu">
    <img
      src="https://i.postimg.cc/ryG4Sjfk/logo-franco.png"
      alt="Logo Franco"
      class="menu__logo"
    />
    <ul class="menu__items">
      <li>
        <a href="./porfolio.html">Porfolio</a>
      </li>
      <li>
        <a href="#cards">Servicios</a>
      </li>
      <li>
        <a href="./contact.html">Contacto</a>
      </li>
    </ul>
    <div class="btn-menu">
      <i class="btn-menu__icon fa fa-bars"></i>
    </div>
  </nav>
`;
  containerEl.appendChild(newHeaderComponent);
  const btn = document.querySelector(".btn-menu");
  const btnItem = document.querySelector(".btn-menu__icon ");
  if (btn) {
    btn.addEventListener("click", () => {
      const menu__items = document.querySelector(".menu__items");
      menu__items.classList.toggle("show");

      btnItem.classList.toggle("fa-times");
    });
  }
  addEventListener("DOMContentLoaded", () => {});
}
