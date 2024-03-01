let to_verify = new Array(9).fill().map(() => new Array(9).fill(0));

function F11(array_number) {
    for(let i = 0; i < array_number.length; i++) {
        to_verify[i] = array_number[i].split(' ').map(Number);
    }
}

function F12() {
    let table = document.getElementById('sudokuTable');
    for(let i = 0; i < to_verify.length; i++) {
        let tr = document.createElement('tr');
        for(let j = 0; j < to_verify[i].length; j++) {
            let td = document.createElement('td');
            td.textContent = to_verify[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

F11([
    "4 2 7 3 5 1 9 8 6",
    "9 8 3 7 6 2 5 1 4",
    "1 5 6 8 9 4 7 2 3",
    "2 3 9 1 8 5 4 6 7",
    "7 4 1 6 3 9 2 5 8",
    "5 6 8 2 4 7 1 3 9",
    "8 7 2 9 1 3 6 4 5",
    "3 9 5 4 2 6 8 7 1",
    "6 1 4 5 7 8 3 9 6"
]);

F12();