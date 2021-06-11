function useTemplate(data, template) {
  const titleEl = template.content.querySelector(".card__item-title");
  titleEl.textContent = data.title;
  const textEl = template.content.querySelector(".card__item-text");
  textEl.textContent = data.text;
  const imgEl = template.content.querySelector(".card__item img");
  imgEl.setAttribute("src", data.img);
  imgEl.setAttribute("alt", data.altImg);
  if (data.link && data.textOfLink) {
    const linkEl = template.content.querySelector(".card__item-link");
    linkEl.style.display = "block";
    linkEl.setAttribute("href", data.link);
    linkEl.setAttribute("alt", data.textOfLink);
  }
  let clone = document.importNode(template.content, true);
  return clone;
}
function cardsComponent(containerEl, titleOfCardsSection, data) {
  const newCardComponent = document.createElement("div");
  newCardComponent.innerHTML = `<div class="cards__content">
  <h2 class="subtitle cards__title" id="cards">${titleOfCardsSection}</h2>
  <div class="cards__container"></div>
  <template id="card-template">
    <div class="card__item">
      <img src="" alt="" />
      <h3 class="card__item-title"></h3>
      <p class="card__item-text"></p>
      <a href="" class="show card__item-link" target="_blank">Ir a Github</a>
    </div>
  </template>
</div>`;
  //acá añado el componente al DOM
  containerEl.appendChild(newCardComponent);
  // una vez añadido, busco el template y meto la info
  const cardsContainer = document.querySelector(".cards__container");
  const templateCard = document.getElementById("card-template");
  data.forEach((item) => {
    const newCard = useTemplate(item, templateCard);
    cardsContainer.appendChild(newCard);
  });
}
