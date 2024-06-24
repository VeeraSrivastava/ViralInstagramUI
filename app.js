localStorage.setItem("slideNo", "0");
var slideNo = localStorage.getItem("slideNo");
var colorArray = ["#4BE8DF", "#FF6B9A", "#431200"];
var titleArray = [
  "Where Every Bite is a Delight.",
  "Happiness is a Warm Donut.",
  "Your Daily Dose of Sweetness.",
];

var descArray = [
  "Sweeten your day with our delicious donuts, crafted to perfection. Each bite is a burst of joy, turning ordinary moments into sweet memories. Start your day right, one donut at a time.",
  "Brighten your day with our delightful donuts, made from the finest ingredients. Each bite offers a moment of pure bliss, making every day a little sweeter. Enjoy happiness, one donut at a time.",
  "Treat yourself to our delectable donuts, lovingly made to add sweetness to your day. Every bite brings a smile, turning ordinary moments into joyful experiences. Savor the goodness, one donut at a time.",
];

function setActive(className) {
  //Remove the previous class of active given to the active element
  var elements = document.querySelectorAll(`.${className}`);
  elements.forEach(function (element) {
    element.classList.remove(className);
  });
  //Add the class of active to the new active element
  document
    .getElementById(`${localStorage.getItem("slideNo")}`)
    .classList.add("active");
}

function updateScreen(slideNumber) {
  document.getElementById("main").style.backgroundColor =
    colorArray[parseInt(slideNumber)];
  document.getElementById("title").innerText =
    titleArray[parseInt(slideNumber)];
  document.getElementById("description").innerText =
    descArray[parseInt(slideNumber)];

  document.getElementById("donut").src = `./img/donut/${slideNumber}.png`;

  document.getElementById("topLeft").src = `./img/${slideNumber}/topLeft.png`;
  document.getElementById("topRight").src = `./img/${slideNumber}/topRight.png`;
  document.getElementById(
    "bottomLeft"
  ).src = `./img/${slideNumber}/bottomLeft.png`;
  document.getElementById(
    "bottomRight"
  ).src = `./img/${slideNumber}/bottomRight.png`;

  setActive("active");
}
updateScreen(slideNo);

document.getElementById("main").addEventListener("click", () => {
    //Add animation
    createCircle();

  let currentSlide = parseInt(localStorage.getItem("slideNo"));
  let nextSlide;
  if (currentSlide < 2) {
    nextSlide = currentSlide + 1;
  } else {
    nextSlide = 0;
  }
  localStorage.setItem("slideNo", nextSlide);
  updateScreen(localStorage.getItem("slideNo"));
});
function createCircle() {
    const x = event.clientX+100;
    const y = event.clientY-350;
    let circle = document.createElement("div");
    circle.style.position = "absolute";
    circle.style.top = x + "px";
    circle.style.left = y + "px";
    circle.style.zIndex = 11;
    circle.style.background =
      colorArray[parseInt(localStorage.getItem("slideNo"))];
    circle.classList.add("rip");
    document.getElementById("main").appendChild(circle);
    setTimeout(() => {
      document.getElementById("main").removeChild(circle);
    }, 1000);
  }
  