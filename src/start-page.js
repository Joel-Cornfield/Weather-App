import content from "./index";
import cleanDOM from "./dom";
import logo from "./assets/logo.png";
import magnify from "./assets/magnify.svg";

export default function buildStartPage() {
    cleanDOM()
    content.classList.add("start");
  
    const img = document.createElement("img");
    img.classList.add("logo");
    img.src = logo;
    content.appendChild(img);
  
    // Add a title under the logo
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Weather Wonder";
    content.appendChild(title);
  
    const searchbox = document.createElement("div");
    searchbox.classList.add("searchbox");
  
    const searchIcon = document.createElement("img");
    searchIcon.classList.add("search-icon");
    searchIcon.src = magnify;
    searchbox.appendChild(searchIcon);
  
    const search = document.createElement("input");
    search.id = "search";
    search.placeholder = "Discover somewhere...";
    searchbox.appendChild(search);
  
    const button = document.createElement("button");
    button.textContent = "Search";
    searchbox.appendChild(button);
  
    content.appendChild(searchbox);

    return new Promise((resolve) => {
        button.addEventListener("click", () => {
          if (search.validity.valid) {
            resolve(search.value);
          }
        });
    });
}
