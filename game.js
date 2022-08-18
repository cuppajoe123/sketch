const container = document.querySelector('.container');

function createGrid(numRows, numColumns) {
    for (let i = 0; i < numRows; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < numColumns; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}

createGrid(16, 16);
