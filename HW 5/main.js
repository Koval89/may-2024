// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let area = (a, b) => a * b
// console.log(area(10, 20))


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let circleArea = (r) => Math.PI * r * 2
// console.log(circleArea(2))


// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let cylinderArea = (H, R) => 2 * Math.PI * R * (H + R)
// console.log(cylinderArea(10, 15))


// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент


// let arr = (array) => {
//     for (const element of array) {
//         console.log(element)
//     }
// }
// arr([15, 25, 'day', true])


// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraph = (str, tag) => {
//     document.write(`<${tag}>${str}</${tag}>`)
// }
//
// paragraph('hi','p')


// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let createUlWithLi = (item) => {
//     document.write(`<ul>`)
//         document.write(`<li>${item}</li>`)
//         document.write(`<li>${item}</li>`)
//         document.write(`<li>${item}</li>`)
//     document.write(`</ul>`)
// }
//
// createUlWithLi('hallo')

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let createUlWithLi = (item,num)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${item}</li>`)
//
//     }
//
//     document.write(`</ul>`)
// }
//
// createUlWithLi('hallo', 3)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

// let arrOfElements = (arrElements) => {
//     document.write(`<ul>`)
//     for (const element of arrElements) {
//         document.write(`<li>`)
//         for (const elementKey in element) {
//             document.write(`${elementKey} - ${element[elementKey]}`)
//         }
//         document.write(`</li>`)
//     }
//     document.write(`</ul>`)
// }
//
//
// let arr = [
//     {pet:'dog', age: 8, status: true},
//     {pet:'cat', age: 3, status: false},
//     {pet:'hamster', age: 1, status: true},
// ]
// arrOfElements(arr)


// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let arrObject = (object) => {
//
//     for (const objectElement of object) {
//         document.write(`<div>`)
//         for (const objectElementKey in objectElement) {
//             document.write(`${objectElementKey} - ${objectElement[objectElementKey]} `)
//
//         }
//         document.write(`</div>`)
//         document.write('-------')
//     }
//
//
// }
//
// let arr = [
//     {id: 1, name: 'vasya', age: 35},
//     {id: 2, name: 'petya', age: 26},
//     {id: 3, name: 'volya', age: 20}
// ]
// arrObject(arr)

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

// let minNums = (arrNums) => {
//     let min = arr[0]
//     for (let i = 0; i < arrNums.length; i++) {
//         if (arr[i] < min) {
//             min=arr[i]
//         }
//
//     }
//     return min
// }
// let arr = [11, 25, 36, -10]
//
// console.log(minNums(arr))

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = (arr) => {
//     let res = 0
//     for (let i = 0; i < arr.length; i++) {
//         res = res+arr[i]
//     }
//     return res
// }
// console.log(sum([1,2,10]))








// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr, index1, index2) => {
//     let num = arr[index2]
//     arr[index2] = arr[index1]
//     arr[index1] = num
//     return arr
//
// }
//
// console.log(swap([11,22,33,44],0,1))

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


// let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     for (const element of currencyValues) {
//         if (element.currency === exchangeCurrency) {
//             return sumUAH / element.value
//         }
//
//     }
//
//
// }
//
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))