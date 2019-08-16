document.addEventListener("DOMContentLoaded", () => {
document.getElementById("create-task-form").addEventListener("submit", updateValue);
var delCounter = 1;
function updateValue(e) {
  e.preventDefault();
  let input = document.getElementById("new-task-description").value;
  let node = document.createElement("LI");
  node.id = "one"
  let textnode = document.createTextNode(input);
  let btn = document.createElement("BUTTON");
  btn.id = `b${delCounter}`;   
  btn.innerHTML = "delete";                   
  node.appendChild(textnode);
  node.appendChild(btn);
  document.getElementById("tasks").appendChild(node);
  document.querySelector(`#b${delCounter}`).addEventListener("click", removeValue);
  delCounter++;

}

function removeValue(e) {
  e.preventDefault();
  //let node = document.querySelector("");
  console.log(e.srcElement.parentElement);
  e.srcElement.parentElement.remove();

}
});
