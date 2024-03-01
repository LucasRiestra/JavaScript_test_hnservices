function getRegion(row, col) {
    return Math.floor(row / 3) * 3 + Math.floor(col / 3) + 1;
}

function updateMessagesWithColumnsAndRegions() {
    let messages = document.getElementById('messages');
    messages.innerHTML = "";

    for (let i = 0; i < array_number.length; i++) {
        let p = document.createElement('p');
        p.textContent = `Row ${i + 1}: ${F21(array_number[i]) ? 'Valid' : 'Invalid'}`;
        messages.appendChild(p);
    }

    for (let i = 0; i < array_number[0].length; i++) {
        let column = [];
        for (let j = 0; j < array_number.length; j++) {
            column.push(array_number[j][i]);
        }
        let p = document.createElement('p');
        p.textContent = `Column ${i + 1}: ${F21(column) ? 'Valid' : 'Invalid'}`;
        messages.appendChild(p);
    }

    for (let region = 1; region <= 9; region++) {
        let cells = [];
        for (let i = 0; i < array_number.length; i++) {
            for (let j = 0; j < array_number[i].length; j++) {
                if (getRegion(i, j) === region) {
                    cells.push(array_number[i][j]);
                }
            }
        }
        let p = document.createElement('p');
        p.textContent = `Region ${region}: ${F21(cells) ? 'Valid' : 'Invalid'}`;
        messages.appendChild(p);
    }
}

updateMessagesWithColumnsAndRegions();
