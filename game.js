const container = document.querySelector('.gridContainer');

function createGrid(dimension) {
    container.replaceChildren();
    for (let i = 0; i < dimension*dimension; i++) {
        let cell = document.createElement('div');
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

function registerEventListeners() {
    let mouseDown = 0;
    document.body.onmousedown = () => {
        mouseDown = true;
    }
    document.body.onmouseup = () => {
        mouseDown = false;
    }
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('pointerenter', () => {
            if (mouseDown) {
                cell.style.backgroundColor = 'blue';
            }
        });
    });
}

createGrid(80);
registerEventListeners();

const submitGridLength = document.querySelector('.submit');
submitGridLength.addEventListener('click', () => {
    let gridLength = document.getElementById('inputId').value;
    if (gridLength > 0 && gridLength <= 100) {
        createGrid(gridLength);
        registerEventListeners();
    }
});
