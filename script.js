let container = document.querySelector(".container")
let dimensions = 8;
for (i = 0; i < (dimensions*dimensions) ; i++){
    {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${100/dimensions}%`;
        box.style.height = `${100/dimensions}%`;
        container.append(box);
    }
}