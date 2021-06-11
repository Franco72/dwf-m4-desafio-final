function footerComponent(containerEl) {
  const newFooterComponent = document.createElement("div");
  newFooterComponent.innerHTML = `<footer class="footer">
    <div class="footer__content">
      <img src="./img/logo-franco.png" alt="" class="footer__img" />
      <nav>
        <ul class="footer__links-content">
          <li class="footer__item">
            <a href="#" class="footer__link"
              >Instagram <img src="./img/instagram.png" alt=""
            /></a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link"
              >Linkedin <img src="./img/linkedin.png" alt=""
            /></a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link"
              >Github <img src="./img/github.png" alt=""
            /></a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>`;
  containerEl.appendChild(newFooterComponent);
}
