async function sendData(url, data) {
  try {
    const dataSent = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        to: data.user_email,
        message: data.user_message,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    const response = await dataSent.json();
    return response;
  } catch (e) {
    console.log(e);
    return "error";
  }
}

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
        <span class="contact__form-status"></span>
      </li>
      <button class="contact__form-btn">Enviar</button>
    </form>
  </section>`;
  newContactComponent
    .querySelector(".contact__form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      const dataStatus = await sendData(
        "https://apx-api.vercel.app/api/utils/dwf",
        data
      );
      const status = document.querySelector(".contact__form-status");
      if (dataStatus.ok == true) {
        status.style.display = "inherit";
        status.textContent = "Información enviada correctamente";
      } else {
        status.style.display = "inherit";
        status.textContent = "Ocurrió un error al enviar la información";
      }
    });
  container.appendChild(newContactComponent);
}
