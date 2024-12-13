import createCloseButton from "./close-button";
import cleanDOM from "./dom";
import content from "./index";

export default function loadErrorPage(err) {
    cleanDOM();
    content.classList.add("error");

    const div = document.createElement("div");

    const code = document.createElement("h1");
    code.classList.add("code");
    code.textContent = err.message;
    div.appendChild(code);

    const cause = document.createElement("p");
    cause.classList.add("cause");
    let causeText;
    switch (err.message) {
        case "400":
            causeText = "Your request got swept away in a data storm... try again!";
            break;
        case "401":
            causeText = "Looks like you're not cleared for this weather forecast... bring your API key next time!";
            break;
        case "404":
            causeText = "Lost in the fog... we couldn’t find that location. Try searching again!";
            break;
        case "429":
            causeText = "You've hit a data downpour! Slow down and let the storm pass.";
            break;
        case "500":
            causeText = "The weather servers got struck by lightning... please try again later!";
            break;
        default:
            break;
    }
    cause.textContent = causeText;

    div.appendChild(cause);
    
    div.appendChild(createCloseButton());

    content.appendChild(div);
}