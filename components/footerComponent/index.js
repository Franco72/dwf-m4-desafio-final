function footerComponent(containerEl) {
  const newFooterComponent = document.createElement("div");
  newFooterComponent.innerHTML = `<footer class="footer">
    <div class="footer__content">
      <img src="https://i.postimg.cc/ryG4Sjfk/logo-franco.png" alt="Logo Franco" class="footer__img" />
      <nav>
        <ul class="footer__links-content">
          <li class="footer__item">
              <a href="https://www.instagram.com/francomoya1/" class="footer__link" target="_blank">
             Instagram<i class="fab fa-instagram"></i>
           </a>
          </li>
          <li class="footer__item">
          <a href="https://ar.linkedin.com/in/franco-moya-441242203?trk=people-guest_people_search-card" class="footer__link" target="_blank">
         Linkedin<i class="fab fa-linkedin"></i>
       </a>
      </li>
      <li class="footer__item">
      <a href="https://github.com/Franco72" class="footer__link" target="_blank">
     Github<i class="fab fa-github"></i>
   </a>
  </li>
        </ul>
      </nav>
    </div>
  </footer>`;
  containerEl.appendChild(newFooterComponent);
}

{
  /* <li class="footer__item">
<a href="#" class="footer__link"
  >Instagram <img src="./img/instagram.png" alt=""
/></a>
</li> */
}
{
  /* <li class="footer__item">
<a href="#" class="footer__link"
  >Linkedin <img src="./img/linkedin.png" alt=""
/></a>
</li> */
}
{
  /* <li class="footer__item">
<a href="#" class="footer__link"
  >Github <img src="./img/github.png" alt=""
/></a>
</li> */
}
