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

function task4(array) {
    return array.filter((element) => element % 5 === 0);
}

function task5(array) {
    const sum = array.reduce((accum, element) => accum + element);
    return (sum / array.length).toFixed(1);
}

function task6(array) {
    const firstItem = array.shift();
    array.push(firstItem);
    return array;
}

function task7(array) {
    let evenSum = 0;
    let notEvenSum = 0;
    array.forEach((element, index) => {
        if (index % 2 === 0) {
            evenSum += element;
        } else {
            notEvenSum += element;
        }
    });
    return evenSum / notEvenSum;
}

function task8() {
    const number = prompt('Введите число');
    if (!isNaN(number)) {
        console.log(number);
        const arrayNumbers = number
            .split('')
            .map((element) => Number(element) + 1)
            .join('');
        return arrayNumbers;
    }
}
