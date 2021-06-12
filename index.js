function getImgById(id, json) {
  let img = "";
  altImg = "";
  json.includes.Asset.forEach((element) => {
    if (element.sys.id == id) {
      img = element.fields.file.url;
      altImg = element.fields.title;
    }
  });
  return { img: img, altImg: altImg };
}
function orderCDNData(json) {
  let welcomeData = {};
  let aboutMeData = {};
  let servicesData = [];
  for (let e of json.items) {
    if (e.sys.contentType.sys.id == "welcome") {
      welcomeData = e.fields;
    }
    if (e.sys.contentType.sys.id == "aboutMe") {
      const imgData = getImgById(e.fields.img.sys.id, json);
      aboutMeData = {
        title: e.fields.title,
        text: e.fields.text,
        img: imgData.img,
        altImg: imgData.altImg,
      };
    }
    if (e.sys.contentType.sys.id == "services") {
      const imgData = getImgById(e.fields.img.sys.id, json);
      servicesData.push({
        title: e.fields.title,
        text: e.fields.text,
        link: e.fields.link,
        textOfLink: e.fields.textOfLink,
        img: imgData.img,
        altImg: imgData.altImg,
      });
    }
  }
  return {
    welcomeData: welcomeData,
    aboutMeData: aboutMeData,
    servicesData: servicesData,
  };
}
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
    const orderedData = orderCDNData(json);
    return orderedData;
  } catch (e) {
    console.error(e);
  }
}

(async function main() {
  // agregando el componente "Header"
  const headerContainer = document.getElementById("header-container");
  headerComponent(headerContainer, "inicio");
  // pidiendo los datos de contentful a través de su API (GET)
  const cdnData = await getCDNData();
  addWelcomeData(cdnData.welcomeData);
  addAboutMeData(cdnData.aboutMeData);
  // agregando el componente "Cards"
  const servicesContainer = document.getElementById("services-container");
  cardsComponent(servicesContainer, "Mis servicios", cdnData.servicesData);
  // agregando el componente "Contact"
  const contactContainer = document.getElementById("contact-container");
  contactComponent(contactContainer);
  // agregando el componente "Footer"
  const footerContainer = document.getElementById("footer-container");
  footerComponent(footerContainer);
})();
