function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const value = parseInt(element.innerText);
  return value;
}
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function setBgColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]", "text-white");
}
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
