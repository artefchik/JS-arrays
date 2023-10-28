function generateArray(length, number) {
    return [...new Array(length)].map(() => Math.round(Math.random() * number));
}
const array = generateArray(8, 10);
console.log(array);

// const arrayFilter = array.filter((element) => element % 2 === 0);
// const sum1 = arrayFilter.reduce((accum, elem) => accum + Math.sqrt(elem), 0);
// console.log('g' + sum1);
const sum = () => array.reduce((accum, elem) => (elem % 2 === 0 ? accum + Math.sqrt(elem) : accum), 0);

function task2() {
    const arrayFiltered = array.filter((element) => element > 0 && element < 10);
    const sum = arrayFiltered.reduce((accum, elem) => accum + elem, 0);
    return sum;
}

function task3(array) {
    return array.every((elem) => elem % 2 === 0);
}
