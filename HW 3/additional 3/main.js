// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// debugger
// let start = 100
// let arr = []
// for (start; start > 0; start--) {
//     if (start % 2 === 0) {
//         arr.push(start)
// }
// }
//
// console.log(arr)

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let start = 100
// let arr = []
// for (start; start > 0; start--) {
//     if (start % 2 !== 0) {
//         arr.push(start)
//     }
// }
//
// console.log(arr)


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// debugger
// let number = 0
// let arr =[]
//
// for (number; number < 20 ; number++) {
//     arr.push(Math.round(Math.random()*100))
// }
// console.log(arr)


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// debugger

// let number = 20
// let arr = []
//
// for (number; number >= 0; number--) {
//     if (Math.floor(Math.random() * 1000) >= 8 && Math.floor(Math.random() * 1000) <= 732) {
//         arr.push(number)
//     }
// }
// console.log(arr)


// 2. Вивести за допомогою console.log кожен третій елемен

// debugger
// let x = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
// for (let j = 2; j < x.length; j += 3) {
//     console.log(x[j])
// }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let y = [ 1, 2, 4, 5, 7, 8, 56, 8, 67 ]
// for (let j = 2; j < y.length; j += 3) {
//     if (y[j] % 2 === 0) {
//         console.log(y[j])
//     }
//
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let q = [ 1, 2, 4, 5, 7, 8, 56, 8, 67 ]
// let newArr = []
// for (let j = 2; j < q.length; j += 3) {
//     if (q[j] % 2 === 0) {
//         newArr.push(q[j])
//     }
//
// }
// console.log(newArr)


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56



// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i-1])
//     }
// }

// if (number[i] %2 === 0){
//     console.log (number[i-1])}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arr = [100, 250, 50, 168, 120, 345, 188]
//
// function check(arr){
// let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         sum = sum + num
//     }
//     return sum/arr.length
// }
//
// console.log(check(arr))

//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let number = 0
// let arr = []
// for (number; number < 10; number++) {
//    arr.push(Math.round(Math.random()*10))
// }
// console.log(arr)
//
//
// let arr1 = []
// for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     arr1.push(num*5)
// }
// console.log(arr1)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
//

// let array = [11,22,true,'apple','samsung',false,55]
// let num = []
//
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number"  ){
//         num.push(array[i])
//     }
//
// }
//
// console.log(num)

//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.