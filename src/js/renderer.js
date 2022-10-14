async function toggleMode() {
  const isDarkMode = await window.darkMode.toggle();
}

async function setSystem() {
  await window.darkMode.system();
}

setSystem();
