import restart from "./restart";

export default function createCloseButton() {
  const button = document.createElement("button");
  button.id = "close";
  button.textContent = "close";
  button.addEventListener("click", () => {
    restart()
  });
  return button;
}