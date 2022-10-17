let title = document.getElementById("title").value;
let titleID = title.concat("title");
let paragraph = document.getElementById("paragraph").value;
let paragraphID = title.concat("paragraph");

function save() {
  let title = document.getElementById("title").value;
  let titleID = title.concat("title");
  let paragraph = document.getElementById("paragraph").value;
  let paragraphID = title.concat("paragraph");
  localStorage.setItem(titleID, title);
  console.log(localStorage.getItem(titleID));

  localStorage.setItem(paragraphID, paragraph);
  console.log(localStorage.getItem(paragraphID));
}

function load() {
  let title = document.getElementById("title").value;
  let titleID = title.concat("title");
  let paragraph = document.getElementById("paragraph").value;
  let paragraphID = title.concat("paragraph");
  document.getElementById("title").value = localStorage.getItem(titleID);
  document.getElementById("paragraph").value =
    localStorage.getItem(paragraphID);
}
