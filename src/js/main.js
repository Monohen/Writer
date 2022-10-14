// Start

// Start Title
document.getElementById("title").value = localStorage.getItem("title");

// Start Textarea
document.getElementById("textarea").value = localStorage.getItem("textarea");

// Save Function
function save() {
  // Save Title
  let titleCont = document.getElementById("title").value;
  localStorage.setItem("title", titleCont);
  console.log(titleCont);

  document.title = localStorage.getItem("title");

  // Save Text
  let textareacont = document.getElementById("textarea").value;
  localStorage.setItem("textarea", textareacont);
  console.log(textareacont);

  // Load Notification
  const NOTIFICATION_TITLE = localStorage.getItem("title");
  const NOTIFICATION_BODY = localStorage.getItem("textarea");

  new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY });
}

// Load Function
function load() {
  // Load Title
  document.getElementById("title").value = localStorage.getItem("title");
  document.title = localStorage.getItem("title");

  // Load Text
  document.getElementById("textarea").value = localStorage.getItem("textarea");
}
