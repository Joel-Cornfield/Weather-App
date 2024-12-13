import content from "./index";

export default function cleanDOM() {
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    content.className = "content";
}