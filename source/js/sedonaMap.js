const sedonaMapNoJs = document.querySelector(".main-contact__map");
const sedonaDigitalMap = document.querySelector(".main-contact__map-digital");
console.log(sedonaDigitalMap);
const mapMarker = document.querySelector(".main-contact__map-wrap");

sedonaMapNoJs.classList.add("visually-hidden");
sedonaMapNoJs.style.width = "1px";
sedonaDigitalMap.classList.remove("visually-hidden");
mapMarker.classList.add("visually-hidden");
