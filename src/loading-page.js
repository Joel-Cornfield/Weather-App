import cleanDOM from "./dom";
import content from "./index";
import loaderImage from "./assets/wind.svg";

export default function loadLoadingPage() {
    cleanDOM();
    content.classList.add("loading");

    const div = document.createElement("div");

    const loader = document.createElement("div");
    loader.classList.add("loader");
    loader.style.backgroundImage = `url(${loaderImage})`;

    div.appendChild(loader);

    content.appendChild(div);

    // Create an object with a stop method
    const loaderObj = {
        stop: () => {
            // Stop logic for the loader, such as removing the loader
            div.remove();
        }
    };

    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(loaderObj);  // Resolve with the loader object
        }, 5500);
    });
}
