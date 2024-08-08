// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = [10,20,5000,true,false,'vasya','petya', 'inna', 'pen','dog']
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])
// console.log(arr[8])
// console.log(arr[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let boocks = [
    {title: 'The Little Prince', pageCount: 100, genre: 'story'},
    {title: 'Red sails', pageCount: 70, genre: 'A story extravaganza'},
    {title: 'Three musketeers', pageCount: 95, genre: 'novel'}
];
console.log(boocks)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let boocks2 = [
    {title: 'The Little Prince', pageCount: 100, genre: 'story', authors: {name: 'A. de Saint-Exupéry', age: 55}},
    {title: 'Red sails', pageCount: 70, genre: 'A story extravaganza', authors: {name: 'A. Green', age: 48}},
    {title: 'Three musketeers', pageCount: 95, genre: 'novel', authors: {name: 'A. Dumas', age: 39}}
]
console.log(boocks2)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user = [
    {name: 'sasha', username: 'sasha', password: 'qwe'},
    {name: 'nickolas', username: 'nickolas', password: 'asd'},
    {name: 'dasha', username: 'dasha', password: 'zxc'},
    {name: 'julia', username: 'julia', password: 'xssw'},
    {name: 'dima', username: 'dima', password: 'vfrsw'},
    {name: 'gosha', username: 'gosha', password: 'rtyhgb'},
    {name: 'masha', username: 'masha', password: ',lmkj'},
    {name: 'sergey', username: 'sergey', password: 'vfgytr'},
    {name: 'jora', username: 'jora', password: 'njiuyu'},
    {name: 'vadim', username: 'vadim', password: 'jhggfd'},
]
console.log(user[0].password)
console.log(user[1].password)
console.log(user[2].password)
console.log(user[3].password)
console.log(user[4].password)
console.log(user[5].password)
console.log(user[6].password)
console.log(user[7].password)
console.log(user[8].password)
console.log(user[9].password)


//
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let days = [[], [], [], [], [], [], []];
days[0][0] = 'morning = 20 ';
days[0][1] = 'during the day = 35';
days[0][2] = 'night = 14';
days[1][0] = 'morning = 21, during the day = 36, night = 16';
days[2][0] = 'morning = 22, during the day = 38, night = 13';
days[3][0] = 'morning = 28, during the day = 45, night = 20';
days[4][0] = 'morning = 28, during the day = 52, night = 23';
days[5][0] = 'morning = 25';
days[5][1] = ' during the day = 48';
days[5][2] = ' night = 19';
days[6][0] = 'morning = 27';
days[6][1] = ' during the day = 49';
days[6][2] = ' night = 13';

console.log(days)


//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3




// let x=9
// if (x!==0) {
//     console.log('true');
// }else{
//     console.log('false');
// }
// let x1 = prompt('enter x')
// if (x1==1){
//     console.log(true);
// }else if (x1==0){
//     console.log(true);
// }else if (x1==-3){
//     console.log(true);
// }else {
//     console.log(false)
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time=prompt('enter time')
// if (time>=0 && time<=15){
//     console.log('first part')
// } else if (time>=16 && time<=30){
//     console.log('second part')
// }else if (time>=31 && time<=45){
//     console.log('third part')
// }else if (time>=46 && time<=59){
//     console.log('fourth part')
// }else {
//     console.log(Error)
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).



// let day=prompt('enter the number of the month')
// if (day>=1 && day<=10){
//     console.log('first decade')
// }else if (day>=11 && day<=20){
//     console.log('second decade')
// }else if (day>=21 && day<=31){
//     console.log('third decade')
// }else {
//     console.log(Error)
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

// let schedule=+prompt('schedule')
// switch (schedule){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//     default :
//         console.log(Error)
// }


//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray)
if (coursesAndDurationArray[0].monthDuration >5){
    console.log('Super')
}else {
    console.log('not great')
}
if (coursesAndDurationArray[1].monthDuration >5){
    console.log('Super')
}else {
    console.log('not great')
}
if (coursesAndDurationArray[2].monthDuration >5){
    console.log('Super')
}else {
    console.log('not great')
}
if (coursesAndDurationArray[3].monthDuration >5){
    console.log('Super')
}else {
    console.log('not great')
}
if (coursesAndDurationArray[4].monthDuration >5){
    console.log('Super')
}else {
    console.log('not great')
}
if (coursesAndDurationArray[5].monthDuration >5){
    console.log('Super')
}else {
    console.log('not great')
}