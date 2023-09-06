function createBoard(size) {
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
    
}

function getSize() {
    let input = prompt("Size of Board?");
    let message = document.querySelector("#message");
    if (input == "") {
        message.innerHTML = "Provide a number"
    }
    else if(input < 0 || input > 100) {
        message.innerHTML = "Number has to be between 1 and 100"
    }
    else {
        message.innerHTML = "Play now"
        return input;
    }
}

function colorDiv() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = 'black'
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}

let color = "black";

createBoard(16);

const btn = document.querySelector("#popup");

btn.addEventListener('click', () => {
    let size = getSize();
    createBoard(size);
})


