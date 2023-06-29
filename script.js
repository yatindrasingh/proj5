const colors = [
  "green",
  "red",
  "rgb(133,122,200)",
  "#f15025",
  "rgb(255, 245, 228)",
  "#42855B",
  "#D2D79F",
  "#EC7272",
  "#F7A76C",
];

const btn = document.getElementById("Click");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const radomNumber = getRandomNumber();
  console.log(getRandomNumber());
  document.body.style.backgroundColor = colors[radomNumber];
  color.textContent = colors[radomNumber];
});

function getRandomNumber() {
  return Math.trunc(Math.random() * colors.length);
}
