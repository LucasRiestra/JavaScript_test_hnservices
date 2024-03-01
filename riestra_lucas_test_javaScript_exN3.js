function getRegion(row, col) {
    return Math.floor(row / 3) * 3 + Math.floor(col / 3) + 1;
}

function displayAnomaly(message, values) {
    let messages = document.getElementById('messages');
    messages.innerHTML += `${message} ${values.join(' ')}<br>`;
}

function F31(sudoku) {
    for (let i = 0; i < sudoku.length; i++) {
        if (!F21(sudoku[i])) {
            displayAnomaly(`Row ${i + 1} incorrect`, sudoku[i]);
        }
    }
}

function F32(sudoku) {
    for (let i = 0; i < sudoku[0].length; i++) {
        let column = [];
        for (let j = 0; j < sudoku.length; j++) {
            column.push(sudoku[j][i]);
        }
        if (!F21(column)) {
            displayAnomaly(`Column ${i + 1} incorrect`, column);
        }
    }
}

function F33(sudoku) {
    for (let region = 1; region <= 9; region++) {
        let cells = [];
        for (let i = 0; i < sudoku.length; i++) {
            for (let j = 0; j < sudoku[i].length; j++) {
                if (getRegion(i, j) === region) {
                    cells.push(sudoku[i][j]);
                }
            }
        }
        if (!F21(cells)) {
            displayAnomaly(`Region ${region} incorrect`, cells);
        }
    }
}

F31(array_number);
F32(array_number);
F33(array_number);
updateMessages();