// create div
// make 16x16 grid of square divs (for loop)
// put the grid square divs inside a container div (in html)
// make the divs appear as a grid

const container = document.querySelector('#container');



function createGrid() {
    for (let i = 0; i < 256; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid');
        container.appendChild(gridSquare);
    }
}

function addHoverEffect() {
    const gridSquare = document.querySelectorAll('.grid');

    gridSquare.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.classList.add('hoveredOn');
            gridSquare.style.backgroundColor = 'blue';
        });

    });
}




createGrid();
addHoverEffect();

