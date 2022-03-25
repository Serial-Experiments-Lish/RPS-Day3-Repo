function powRecursive(x, n) {
    if (n == 1) {
        return x;
    }else{
        return x * powRecursive(x, n - 1);
    }
}

powRecursive(2, 5);
console.log(powRecursive(2,5));

powRecursive(7, 3);
console.log(powRecursive(7,3));

powRecursive(12, 2);
console.log(powRecursive(12,2));

powRecursive(9, 4);
console.log(powRecursive(9,4));

function powLoop(x, n) {
    let result = 1;

    for(i=0; i<n; i++) {
        result *= x;
    }
    return result;
}

powLoop(2, 5);
console.log(powLoop(2,5));

powLoop(7, 3);
console.log(powLoop(7,3));

powLoop(12, 2);
console.log(powLoop(12,2));

powLoop(9, 4);
console.log(powLoop(9,4));

console.log('=D');