//  Завдання 1

// let arr2 = [1,2,3]

// function arrCopy(arr) {
//     let newArr = [];
//     arr.forEach(element => {
//         newArr.push(element)
//     });
//     return newArr
// }

// const arr1 = arrCopy(arr2);

// console.log('Оригінал', arr2);
// console.log('Копія',arr1);

//  Завдання 2

// function arrToString(arr) {
//     let newArr = [];
//     arr.forEach(element => {
//         newArr.push(String(element))
//     });
//     return newArr
// }

// const arr1 = arrToString([1,2,3])

// console.log(arr1);

// Завдання 3

// function getLength(arr) {
//     let newArr = [];
//     arr.forEach(element => {
//         newArr.push(element.length)
//     });
//     return newArr
// }

// const arr1 = getLength(["Ivan","Pavlo","Ira"])

// console.log(arr1);

// Завдання 4

function  removeDuplicates(arr) {
    let newArr = [];
    arr.forEach(element => {
        if(newArr.indexOf(element)==-1) newArr.push(element)
    });
    return newArr
}
const arr1 = removeDuplicates(['html','css','html','js'])

console.log(arr1);