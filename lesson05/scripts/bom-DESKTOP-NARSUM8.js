const input = document.querySelector("#favchap");
const button = document.querySelector("#submit");
const list = document.querySelector("#list");

// Event Listener for submit Button
button.addEventListener("click", () => {
  //  blank? no action
  if (input.value !== "") {
    input.focus();
    return;
  }

  //   list ELement
  const listLine = document.createElement("li");

  // delete button
  const deleteBttn = document.createElement("button");
  // content of delete button
  deleteBttn.textContent = "❌";

  listLine.textContent = input.value;
  listLine.appendChild(deleteBttn);

  // Put the lines in the unordered list
  list.appendChild(listLine);

  // event listener to delete button
  deleteBttn.addEventListener("click", () => {
    list.removeChild(listLine);
  });

  // clear input
  input.value = "";

  // focus
  input.focus();
});
