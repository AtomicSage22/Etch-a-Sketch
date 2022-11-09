let dimensions = 16;
let color = "black";
const container = document.querySelector(".gridContainer"); //Initial grid dimensions
const button = document.querySelector(".gridSize");
const colorButton = document.querySelector("#colorInput");
const randomColors = document.querySelector(".randomColors");
const resetButton = document.querySelector(".reset");

colorButton.addEventListener("input", () => {
  color = colorButton.value;
  const box = document.querySelectorAll(".box");
  box.forEach((e) => {
    //Function to add hover effect
    e.addEventListener(
      "mouseover",
      () => (e.style.backgroundColor = `${color}`)
    );
  });
});

randomColors.addEventListener("click", () => {
  const box = document.querySelectorAll(".box");
  box.forEach((e) => {
    //Function to add hover effect
    e.addEventListener(
      "mouseover",
      () =>
        (e.style.backgroundColor = `#${Math.floor(
          Math.random() * 16777215
        ).toString(16)}`)
    );
  });
});

resetButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {box.style.backgroundColor = "white"});
});

const generateGrid = (dimensions, colors) => {
  //Function to generate grid
  for (
    i = 0;
    i < dimensions * dimensions;
    i++ //based on given dimensions
  ) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${100 / dimensions}%`;
    box.style.height = `${100 / dimensions}%`;
    container.append(box);
  }
  const box = document.querySelectorAll(".box");
  box.forEach((e) => {
    //Function to add hover effect
    e.addEventListener(
      "mouseover",
      () => (e.style.backgroundColor = `${colors}`)
    );
  });
};

generateGrid(dimensions, color);

button.addEventListener("click", () => {
  //Function to change grid
  dimensions = prompt("Enter Grid Size");
  if (dimensions < 100) {
    while (container.firstChild) {
      //dimensions and generate new, working grid
      container.removeChild(container.firstChild);
    }
    generateGrid(dimensions, color);
  } else {
    alert("Enter Dimensions should be less than 100.");
  }
});
