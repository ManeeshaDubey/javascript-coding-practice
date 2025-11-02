// find maximum number in an array


const arr = [1, -200, -482, 8, 16, 32, 64]

function maximumNumber(x) {
    let temp = x[0];
    for (let i = 0; i < x.length; i++) {
        if (temp < x[i]) {
            temp = x[i];
        }
    }
    return temp;
}

console.log(maximumNumber(arr));


//using built in method

console.log(Math.max(...arr));