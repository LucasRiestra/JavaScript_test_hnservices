var array_number = new Array(9);
array_number[0]= "4 2 7 3 5 1 9 8 6".split(' ').map(Number);
array_number[1]= "9 8 3 7 6 2 5 1 4".split(' ').map(Number);
array_number[2]= "1 5 6 8 9 4 7 2 3".split(' ').map(Number);
array_number[3]= "2 3 9 1 8 5 4 6 7".split(' ').map(Number);
array_number[4]= "7 4 1 6 3 9 2 5 8".split(' ').map(Number);
array_number[5]= "5 6 8 2 4 7 1 3 9".split(' ').map(Number);
array_number[6]= "8 7 2 9 1 3 6 4 5".split(' ').map(Number);
array_number[7]= "3 9 5 4 2 6 8 7 1".split(' ').map(Number);
array_number[8]= "6 1 4 5 7 8 3 9 2".split(' ').map(Number);

function F21(A) {
    for(let i = 0; i < A.length; i++) {
        if(A[i] < 1 || A[i] > 9) {
            return false;
        }
    }

    let uniqueA = A.filter((v, i, a) => a.indexOf(v) === i);
    if(uniqueA.length !== A.length) {
        return false;
    }
    return true;
}

for(let i = 0; i < array_number.length; i++) {
    console.log(F21(array_number[i]));
}
