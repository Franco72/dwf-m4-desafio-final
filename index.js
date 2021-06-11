function addAboutMeData(data) {
  const titleEl = document.querySelector(".about-me__title");
  titleEl.textContent = data.title;
  const textEl = document.querySelector(".about-me__text");
  textEl.textContent = data.text;
  const imgEl = document.querySelector(".about-me__content-img");
  imgEl.setAttribute("src", data.img);
  imgEl.setAttribute("alt", data.altImg);
}

function addWelcomeData(data) {
  const titleEl = document.getElementById("welcome-title");
  titleEl.textContent = data.title;
  const subtitleEl = document.getElementById("welcome-subtitle");
  subtitleEl.textContent = data.subtitle;
}
async function getCDNData() {
  try {
    // api request
    const response = await fetch(
      "https://cdn.contentful.com/spaces/8b7skyzta8a4/environments/master/entries?access_token=CjFhI4GUCiIEaGDAcFuIesyrsqz8jjfJwUU4559oCGw"
    );
    const json = await response.json();
    console.log(json);
    let welcomeData = {};
    let aboutMeData = {};
    let servicesData = [];
    for (let e of json.items) {
      if (e.fields.type == "welcome") {
        welcomeData = e.fields;
      }
      if (e.fields.type == "about-me") {
        let img = "";
        let altImg = "";
        json.includes.Asset.forEach((element) => {
          if (element.sys.id == e.fields.img.sys.id) {
            img = element.fields.file.url;
            altImg = element.fields.title;
          }
        });
        aboutMeData = {
          title: e.fields.title,
          text: e.fields.text,
          img: "https:" + img,
          altImg: altImg,
        };
      }
      if (e.fields.type == "service") {
        let img = "";
        let altImg = "";
        json.includes.Asset.forEach((element) => {
          if (element.sys.id == e.fields.img.sys.id) {
            img = element.fields.file.url;
            altImg = element.fields.title;
          }
        });
        servicesData.push({
          title: e.fields.title,
          text: e.fields.text,
          link: e.fields.link,
          textOfLink: e.fields.textOfLink,
          img: "https:" + img,
          altImg: altImg,
        });
      }
    }
    // return json;
    return [welcomeData, aboutMeData, servicesData];
  } catch (e) {
    console.error(e);
  }
}

(async function main() {
  // agregando el componente "Header"
  const headerContainer = document.getElementById("header-container");
  headerComponent(headerContainer);
  // pidiendo los datos de contentful a través de su API (GET)
  const cdnData = await getCDNData();
  addWelcomeData(cdnData[0]);
  addAboutMeData(cdnData[1]);
  // agregando el componente "Cards"
  const servicesContainer = document.getElementById("services-container");
  cardsComponent(servicesContainer, "Mis servicios", cdnData[2]);
  // agregando el componente "Contact"
  const contactContainer = document.getElementById("contact-container");
  contactComponent(contactContainer);
  // agregando el componente "Footer"
  const footerContainer = document.getElementById("footer-container");
  footerComponent(footerContainer);
})();
