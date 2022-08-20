const container = document.querySelector('.gridContainer');
let cellColor = 'blue'; //default color

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

function isColor(strColor){
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}

function registerPointerEventListeners() {
    let pointerDown = 0;
    document.body.onpointerdown = () => {
        pointerDown = true;
    }
    document.body.onmouseup = () => {
        pointerDown = false;
    }
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('pointerenter', () => {
            if (pointerDown) {
                cell.style.backgroundColor = cellColor;
            }
        });
    });
}



createGrid(80);
registerPointerEventListeners();

const submitGridLength = document.querySelector('.submitGridLength');
submitGridLength.addEventListener('click', () => {
    let gridLength = document.getElementById('gridLength').value;
    if (gridLength > 0 && gridLength <= 100) {
        createGrid(gridLength);
        registerPointerEventListeners();
    }
});

const submitCellColor = document.querySelector('.submitCellColor');
submitCellColor.addEventListener('click', () => {
    let newCellColor = document.getElementById('cellColor').value;
    if (isColor(newCellColor)) {
        cellColor = newCellColor;
    }
});
