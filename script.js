const container = document.querySelector(".gridContainer");         
let dimensions = 16;                                            //Initial grid dimensions
const button = document.querySelector(".gridSize");             

const generateGrid = (dimensions) => {                          //Function to generate grid 
    for (i = 0; i < (dimensions*dimensions) ; i++)              //based on given dimensions
    {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${100/dimensions}%`;
        box.style.height = `${100/dimensions}%`;
        container.append(box);
    }
    const box = document.querySelectorAll(".box");
    box.forEach((e) => {                                        //Function to add hover effect
    e.addEventListener("mouseover", () => e.style.backgroundColor = "Black");});
};

generateGrid(dimensions);


button.addEventListener("click", () => {                        //Function to change grid 
    dimensions = prompt("Enter Grid Size");
    if(dimensions<100){
        while(container.firstChild){                            //dimensions and generate new, working grid
            container.removeChild(container.firstChild);
        }
        generateGrid(dimensions);
    }
    else{
        alert("Enter Dimensions should be less than 100.");
    }
});


