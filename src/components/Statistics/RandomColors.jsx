
const itemStatistics = document.querySelectorAll(".item");

function getRandomNexColor () {
  return `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0)}`;
}

export const getElementRandomColor = () => {
  return itemStatistics.style.backgroundColor = getRandomNexColor();
}