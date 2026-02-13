const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("tasklist");

function addtask() {
  const inputText = inputBox.value.trim();
  if (inputText === "") {
    return alert("friend there is no text 😭");
  } else {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "li-item";

    const label = document.createElement("label");
    label.textContent = inputText;

    li.appendChild(label);
    li.appendChild(checkbox);

    list.appendChild(li);
    inputText.value = "";
  }
}

addBtn.addEventListener("click", addtask);
