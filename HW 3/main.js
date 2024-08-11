// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//
//     document.write(`<div>item</div>`)
//
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//
//     document.write(`<div>item - ${i}</div>`)
//
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0
// while (i<20){
//     console.log(document.write(`<h1>teg</h1>`))
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 1
// while (i<=20){
//     console.log(document.write(`<h1>${i} teg</h1>`))
//     i++
// }

//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
//     document.write(`<ul>`)
//     for (const item of listOfItems) {
// document.write(`<li> ${item}  </li>`)
//     }
//     document.write(`</ul>`)
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (const product of products) {
//     document.write(
//         `<div class="product-card">
//             <h3 class="product - title">${product.title} Price - ${product.price}</h3>
//             <img src={product.image} alt={product} class='product-image'/>
//         </div>`
//     )
//
// }

//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
//
// for (const user1 of users) {
//     if (user1.status === true) {
//         console.log(user1)
//     }
//
// }
// for (const user2 of users) {
//     if (user2.status === false){
//         console.log(user2)
//     }
//
// }

// for (const user of users) {
//     if (user.age > 30) {
//         console.log(user.name,user.age)
//     }
//
// }


// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років


// ---------------------------------------------------additional1------------------------------------------------------------


// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let num = [1, 15, 25, 49, 63]
// let str = ['lada', 'ford', 'dodge', 'acura', 'opel']
// let arr = [5, 12, true, 'day', false]
// // console.log(num)
// // console.log(str)
// // console.log(arr)
//
// let array = []
//
// array [0] = str [1]
// array [1] = num [2]
// array [2] = arr [2]
// array [3] = num [3]
// array [4] = arr [4]
//
//
// console.log(array)


// - є масив [2,17,13,6,22,31,45,66,100,-18] :

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

// 1. перебрати його циклом while

// let i = 0
// while (i < arr.length) {
//     console.log(arr[i])
//     i++
// }

//     2. перебрати його циклом for

// for (let j = 0; j < arr.length; j++) {
//     console.log(arr[j])
//
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0
// while (i < arr.length) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i])
//
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i])
//     }
//
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
//
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0){
//         arr[i]= "okten"
//     }
//
// }
// console.log(arr)

// 8. вивести масив в зворотньому порядку.

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
//
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]


// let i = arr.length - 1
// while (i >= 0) {
//     console.log(arr [i])
//     i--
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
//
// }


// let i = arr.length -1
// while (i >=0) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i])
//
//     }
//     i--
// }


// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i])
//     }
//
// }


// let i = arr.length - 1
// while (i >= 0) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
//     i--
// }


// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
//
// }


// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = "okten"
//
//     }
//     console.log(arr[i])
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let str = ['ford', 'acura', 'lada', 'geely', 'volvo', 'volkswagen', 'toyota', 'hyundai', 'haval', 'opel']
//
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }
// console.log('----------')


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let element = ['ford', 'acura', true, 22, 31, 45, false, 55, true, 'opel']
// for (let i = 0; i < element.length; i++) {
//     console.log(element[i])
//
// }
//
// console.log('------------------------')

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array = ['ford', 'acura', true, 22, 31, 45, false, 55, true, 'opel']
//
// for (const arrayElement of array) {
//     if (typeof arrayElement === "boolean") {
//         console.log(arrayElement)
//     }
// }
//
// console.log('----------------')

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array1 = ['ford', 'acura', true, 22, 31, 45, false, 55, true, 'opel']
// for (const array1Element of array1) {
//     if (typeof array1Element === "number") {
//         console.log(array1Element)
//     }
// }
// console.log('-------------------------')

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// let array2 = ['ford', 'acura', true, 22, 31, 45, false, 55, true, 'opel']
// for (const array2Element of array2) {
//     if (typeof array2Element === "string"){
//         console.log(array2Element)
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let str = ['ford', 'acura', 'lada', 'geely', 'volvo', 'volkswagen', 'toyota', 'hyundai', 'haval', 'opel']
// let num = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// let bool = [true,false]
// let arr = []
// arr[0]=str[2]
// arr[1]=bool[0]
// arr[2]=num[3]
// arr[3]=str[4]
// arr[4]=num[5]
// arr[5]=bool[1]
// arr[6]=num[9]
// arr[7]=str[8]
// arr[8]=num[0]
// arr[9]=bool[0]
//
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log('item', [i])
//
// }
//
// for (let j = 0; j < 10; j++) {
//     // document.write(`<div>item - ${j}</div>`)
//
//     document.write(`<ul>`)
//     document.write(`<li>item - ${j}</li>`)
//     document.write(`</ul>`)
//
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log('item', [i])
// }
//
// for (let i = 0; i < 100; i++) {
//    document.write(`<div>item - ${i}</div>`)
//
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i=i+2) {
//     console.log('item',[i])
// }

// for (let i = 0; i < 100; i=i+2) {
//     document.write(`<div>item - ${i}</div>`)
//
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if ([i] % 2 === 0) {
//         console.log( [i])
//     }
// }

// for (let i = 0; i < 100; i++) {
//     if ([i] % 2 === 0) {
//         document.write(`<div>${i}</div>`)
//     }
//
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if ([i] % 2 !== 0) {
//         console.log( [i])
//     }
// }

// for (let i = 0; i < 100; i++) {
//     if ([i] % 2 !== 0) {
//         document.write(`<div>${i}</div>`)
//     }
//
// }



