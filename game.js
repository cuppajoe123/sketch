const container = document.querySelector('.container');

function createGrid(dimension) {
    for (let i = 0; i < dimension*dimension; i++) {
        let cell = document.createElement('div');
        cell.textContent = "Hello";
        cell.classList.add('cell');
        container.appendChild(cell);
    }

    let gridTemplate = "";
    for (let i = 0; i < dimension; i++) {
        gridTemplate += "1fr ";
    }
    container.style.gridTemplateColumns = gridTemplate;
    container.style.gridTemplateColumns = gridTemplate;
}

createGrid(8);
