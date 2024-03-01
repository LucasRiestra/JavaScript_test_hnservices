let isValid = true;

function F31(array_number) {
    array_number.forEach((row, i) => {
        if(!F21(row)) {
            console.log(`Line ${i+1} incorrect ${row.join(' ')}`);
            isValid = false;
        }
    });
}

function F32(array_number) {
    array_number[0].forEach((_, i) => {
        let column = array_number.map(row => row[i]);
        if(!F21(column)) {
            console.log(`Column ${i+1} incorrect ${column.join(' ')}`);
            isValid = false;
        }
    });
}

function F33(array_number) {
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            let region = [];
            for(let x = 0; x < 3; x++) {
                for(let y = 0; y < 3; y++) {
                    region.push(array_number[i*3 + x][j*3 + y]);
                }
            }
            if(!F21(region)) {
                console.log(`Region ${i*3 + j + 1} incorrect ${region.join(' ')}`);
                isValid = false;
            }
        }
    }
}

F31(array_number);
F32(array_number);
F33(array_number);

if(isValid) {
    console.log("The sudoku is valid.");
} else {
    console.log("The sudoku is not valid.");
}