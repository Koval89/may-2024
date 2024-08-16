// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function area (a,b){
//     return  a * b;
// }
//
// console.log(area(10,20))


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleArea (r){
//     return Math.PI*r*2
// }
//
// console.log(circleArea(4))


// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinderArea(H,R){
//     return 2*Math.PI*R*(H+R)
// }
//
// console.log(cylinderArea(3,2))


// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

// function arr(array){
//     for (const element of array) {
//         console.log(element)
//     }
// }
// arr([15,25,'day',true])

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

// function paragraph(text,tag){
// document.write(`<${tag}>${text}</${tag}>`)
// }
// paragraph('Hello', 'p')

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

// function createUlWithLi(text) {
//     document.write(`<ul>`)
//       document.write(`<li>${text}</li>`)
//       document.write(`<li>${text}</li>`)
//       document.write(`<li>${text}</li>`)
//
//     document.write(`</ul>`)
// }
//
// createUlWithLi('text')

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

// function createUlWithLi1(text,num){
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
//
// createUlWithLi1('hallo', 3)
// createUlWithLi1('jerry',8)


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// debugger

// function arrOfPrimitiveElements (array) {
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//
//         document.write(`<li>`)
//         for (const Key in arrayElement) {
//             document.write(`${Key} - ${arrayElement [Key]}/ `)
//         }
//         document.write(`</li>`)
//
//     }
//     document.write(`</ul>`)
//
// }
//
// let primitiveElements = [
//     {pet:'dog', age: 8, status: true},
//     {pet:'cat', age: 3, status: false},
//     {pet:'hamster', age: 1, status: true},
// ]
//
// arrOfPrimitiveElements(primitiveElements)


// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function arrObject (array){
//     for (const arrayElement of array) {
//         document.write(`<div>`)
//         for (const arrayElementKey in arrayElement) {
//             document.write(`${arrayElementKey} - ${arrayElement[arrayElementKey]} <br>`)
//         }
//         document.write(`</div>`)
//     }
// }
//
//
// let arrayObject = [
//     {id:1, name: 'vasya', age:25},
//     {id:1, name: 'petya', age:15},
//     {id:1, name: 'kolya', age:35},
//     {id:1, name: 'igor', age:46},
//     {id:1, name: 'egor', age:53},
//     {id:1, name: 'oleksiy', age:29},
//     {id:1, name: 'vitalik', age:28},
//     {id:1, name: 'olya', age:23},
//     {id:1, name: 'juliya', age:20}
// ]
//
// arrObject(arrayObject)


//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

// debugger

// function numMin(array) {
//     let min = array[0]
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i]
//
//         }
//
//     }
//     return min
// }
//
// console.log(numMin([1, 25, 300, 500, 250,-10]))


// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr){
//     let res = 0
//     for (let i = 0; i < arr.length; i++) {
//         num = arr[i]
//         res = res+num
//
//     }
//     console.log(res)
// }
//
// sum([1,2,10])
// sum([1,2,3])

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     let num = arr[index1]
//     arr[index1] = arr[index2]
//     arr[index2] = num
//     return arr
//
// }
//
// console.log(swap([11, 22, 33, 44], 0, 1))

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400


function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value
        }
    }
}

const cur = [
    {currency: 'USD', value: 25},
    {currency: 'EUR', value: 42}];

console.log(exchange(10000, cur, 'USD'));
console.log(exchange(10000, cur, 'EUR'));








































































