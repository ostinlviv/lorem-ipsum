import data from "../data/menu.json" assert { type: "json" };

const frame = document.getElementById("menu");
data.map((element) => {
  console.log(element);
  let link = document.createElement("a");
  link.className = "menu-item";
  link.href = `${element.route}.html`;
  link.innerHTML = `
    <div class="menu-item-wrapper">
      <div class="menu-item-title">
        <img src="assets/images/menu-icons/${element.icon}.svg" alt="${element.name}" />
        <div>${element.name}</div>
      </div>
      <img src="assets/images/arrow.svg" alt="arrow" />
    </div>`;
  frame.appendChild(link);
});