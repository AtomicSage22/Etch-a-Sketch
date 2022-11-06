const container = document.querySelector(".gridContainer");
let dimensions = 20;
const button = document.querySelector(".gridSize");
button.addEventListener("click", () => {dimensions = prompt("Enter Grid Size")});

for (i = 0; i < (dimensions*dimensions) ; i++)
    {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${100/dimensions}%`;
        box.style.height = `${100/dimensions}%`;
        container.append(box);
    }

const box = document.querySelectorAll(".box");
box.forEach((e) => {
    e.addEventListener("mouseover", () => e.style.backgroundColor = "white");
});


