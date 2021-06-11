async function getCDNData() {
  try {
    const response = await fetch(
      "https://cdn.contentful.com/spaces/8b7skyzta8a4/environments/master/entries?access_token=CjFhI4GUCiIEaGDAcFuIesyrsqz8jjfJwUU4559oCGw"
    );
    const json = await response.json();
    console.log(json);
    const worksData = [];
    for (const e of json.items) {
      let img = "";
      let altImg = "";
      if (e.sys.contentType.sys.id == "work") {
        json.includes.Asset.forEach((element) => {
          if (element.sys.id == e.fields.img.sys.id) {
            img = element.fields.file.url;
            altImg = element.fields.title;
          }
        });
        worksData.push({
          title: e.fields.title,
          text: e.fields.text,
          link: e.fields.link,
          textOfLink: e.fields.textOfLink,
          img: "https:" + img,
          altImg: altImg,
        });
      }
    }
    return worksData;
  } catch (e) {
    console.log(e);
  }
}
(async function main() {
  // agregando el componente "Header"
  const headerContainer = document.getElementById("header-container");
  headerComponent(headerContainer);
  // pidiendo los datos de contentful a través de su API (GET)
  const cdnData = await getCDNData();
  // agregando el componente "Cards"
  const worksContainer = document.getElementById("works-container");
  cardsComponent(worksContainer, "Mis trabajos", cdnData);
  // agregando el componente "Contact"
  // agregando el componente "Footer"
  const footerContainer = document.getElementById("footer-container");
  footerComponent(footerContainer);
})();
