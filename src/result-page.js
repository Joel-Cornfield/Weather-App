import createCloseButton from "./close-button";
import cleanDOM from "./dom";
import content from "./index";
import createTableRow from "./table-row";

export default function loadResultPage(result) {
    cleanDOM();
    content.classList.add("result");

    const div = document.createElement("div");

    const address = document.createElement("p");
    address.classList.add("address");
    address.textContent = result.address.split(",")[0];
    div.appendChild(address);

    const temp = document.createElement("h1");
    const tempValue = Math.round(result.temp);
    temp.classList.add("temp");
    temp.textContent = `${tempValue}°`;
    div.appendChild(temp);

    const condition = document.createElement("h4");
    const conditionValue = result.conditions;
    condition.classList.add("condition");
    condition.textContent = conditionValue;
    if (result.conditions.length >= 10) {
        condition.style.fontsize = "1.8rem";
    }
    div.appendChild(condition);

    const table = document.createElement("table");
    table.classList.add("data");

    const tbody = document.createElement("tbody");

    const trows = [
        { th: "Windspeed", td: `${result.windspeed} km/h`, tbody },
        { th: "Cloudcover", td: `${Math.round(result.cloudcover)}%`, tbody },
        { th: "Rainability", td: `${Math.round(result.precipprob)}%`, tbody },
    ];
    trows.forEach((element) => {
        createTableRow(element);
    });

    table.appendChild(tbody);

    div.appendChild(table);

    div.appendChild(createCloseButton());

    content.appendChild(div);
}