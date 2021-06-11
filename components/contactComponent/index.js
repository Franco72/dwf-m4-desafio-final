function contactComponent(container) {
  const newContactComponent = document.createElement("div");
  newContactComponent.innerHTML = `<section class="contact">
    <div class="contact__title-content">
      <h2 class="contact__title">Contacto</h2>
    </div>
    <form class="contact__form">
      <li>
        <label class="contact__form-label">
          <span>NOMBRE</span>
          <input type="text" name="user_name" class="contact__form-input" />
        </label>
      </li>
      <li>
        <label class="contact__form-label">
          <span>EMAIL</span>
          <input type="email" name="user_email" class="contact__form-input" />
        </label>
      </li>
      <li>
        <label class="contact__form-label">
          <span>MENSAJE</span>
          <textarea
            name="user_message"
            class="contact__form-textarea"
          ></textarea>
        </label>
      </li>
      <button class="contact__form-btn">Enviar</button>
    </form>
  </section>`;
  newContactComponent
    .querySelector(".contact__form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
    });
  container.appendChild(newContactComponent);
}
