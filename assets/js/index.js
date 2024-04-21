const searchParams = new URLSearchParams(window.location.search);
const lang = searchParams.get("lang") || 'en'
const menuFrame = document.getElementById("menu");
if (menuFrame) {
  fetch("assets/data/menu.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      data.map((element) => {
        let link = document.createElement("a");
        link.className = "menu-item";
        link.href = `${element.route}_${lang}.html`;
        link.innerHTML = `
          <div class="menu-item-wrapper">
            <div class="menu-item-title">
              <img width="20" src="assets/images/menu-icons/${element.icon}.svg" alt="${element.name}" />
              <div>${element.name[lang]}</div>
            </div>
            <img src="assets/images/arrow.svg" alt="arrow" />
          </div>`;
        menuFrame.appendChild(link);
      });
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
const newsTitle = document.getElementById("news-title");
const getNewsTitle = () => {
  switch (lang) {
    case 'es':
      return 'Noticias'
    case 'fr':
      return 'Nouvelles'
    case 'ru':
      return 'Новости'
    case 'uk':
      return 'Новини'
  
    default:
      return 'News'
  }
}
if (newsTitle) {
  newsTitle.textContent = getNewsTitle();
}
const newsFrame = document.getElementById("news");
if (newsFrame) {
  fetch("assets/data/news.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      data.map((element) => {
        let divEl = document.createElement("div");
        divEl.className = "news-item";
        divEl.innerHTML = `
          <div class="news-item-wrapper">
            <div class="news-item-title">
              <div class="news-title">${element.title[lang]}</div>
              <div class="thin-text">${new Date(
                element.date
              ).toLocaleDateString()}</div>
            </div>
            <div class="thin-text">${element.text[lang]}</div>
          </div>`;
        newsFrame.appendChild(divEl);
      });
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
const params = new URLSearchParams(document.location.search);
const noTitle = params.get("noheader");
if (noTitle === "1") {
  const header = document.querySelector(".page-header");
  if (header) {
    header.classList.add("hidden");
  }
}
