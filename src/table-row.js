export default function createTableRow(obj) {
    const tr = document.createElement("tr");
  
    const th = document.createElement("th");
    th.scope = "row";
    th.textContent = obj.th;
    tr.appendChild(th);
  
    const td = document.createElement("td");
    td.textContent = obj.td;
    tr.appendChild(td);
  
    obj.tbody.appendChild(tr);
  }