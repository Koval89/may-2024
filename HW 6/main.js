//
// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world'
// console.log(str1.length)
// let str2 = 'lorem ipsum'
// console.log(str2.length)
// let str3 = 'javascript is cool'
// console.log(str3.length)


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world'
// let toUpperCase1 = str1.toUpperCase()
// console.log(toUpperCase1)
// let str2 = 'lorem ipsum'
// let toUpperCase2 = str2.toUpperCase()
// console.log(toUpperCase2)
// let str3 = 'javascript is cool'
// let toUpperCase3 = str2.toUpperCase()
// console.log(toUpperCase3)


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD'
// let toLowerCase1 = str1.toLowerCase()
// console.log(toLowerCase1)
// let str2 = 'LOREM IPSUM'
// let toLowerCase2 = str2.toLowerCase()
// console.log(toLowerCase2)
// let str3 = 'JAVASCRIPT IS COOL'
// let toLowerCase3 = str2.toLowerCase()
// console.log(toLowerCase3)


// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// let trim = str.trim()
// console.log(str)
// console.log(trim)
// console.log(str.length)
// console.log(trim.length)


//
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


// let str = 'Ревуть воли як ясла повні';
// let split = str.split(' ')
// console.log(split)


//
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
// let arrToString = arr.map(arr => arr.toString())
// console.log(arrToString)


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.


// let nums = [11, 21, 3];

// function sortNums(array, direction) {
//     if (direction === 'ascending') {
//         return array.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         return array.sort((a, b) => b - a)
//     } else {
//         return 'error'
//     }
// }
//
//
// console.log(sortNums(nums, 'ascending')) // [3,11,21]
// console.log(sortNums(nums, 'descending')) // [21,11,3]
// console.log(sortNums(nums, 'descendi')) // [21,11,3]
//

// function sortNums(array, direction) {
//     switch (direction) {
//         case 'ascending':
//             array.sort((a, b) => a - b)
//             console.log(array)
//             break
//         case 'descending':
//             array.sort((a, b) => b - a)
//             console.log(array)
//             break
//     }
//     return array
//
// }
//
// sortNums(nums, 'ascending')// [3,11,21]
// sortNums(nums, 'descending') // [21,11,3]

// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let sortLower = coursesAndDurationArray.sort((a,b)=>a.monthDuration - b.monthDuration)
// console.log(sortLower)


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = coursesAndDurationArray.filter((function (item){
//     if (item.monthDuration > 5){
//         return coursesAndDurationArray
//     }
// }))
// console.log(filter)


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let map = coursesAndDurationArray.map((item,index)=>{
//     let obj={
//         id:index+1,
//         title:item.title,
//         monthDuration:item.monthDuration
//     }
//     return obj
// })
//
// console.log(map)


// let card = [
//     {value: '6', cardSuit: 'heart', color: 'red'},
//     {value: '7', cardSuit: 'heart', color: 'red'},
//     {value: '8', cardSuit: 'heart', color: 'red'},
//     {value: '9', cardSuit: 'heart', color: 'red'},
//     {value: '10', cardSuit: 'heart', color: 'red'},
//     {value: 'jack', cardSuit: 'heart', color: 'red'},
//     {value: 'lady', cardSuit: 'heart', color: 'red'},
//     {value: 'king', cardSuit: 'heart', color: 'red'},
//     {value: 'ace', cardSuit: 'heart', color: 'red'},
//     {value: '6', cardSuit: 'spade', color: 'black'},
//     {value: '7', cardSuit: 'spade', color: 'black'},
//     {value: '8', cardSuit: 'spade', color: 'black'},
//     {value: '9', cardSuit: 'spade', color: 'black'},
//     {value: '10', cardSuit: 'spade', color: 'black'},
//     {value: 'jack', cardSuit: 'spade', color: 'black'},
//     {value: 'lady', cardSuit: 'spade', color: 'black'},
//     {value: 'kin', cardSuit: 'spade', color: 'black'},
//     {value: 'ace', cardSuit: 'spade', color: 'black'},
//     {value: '6', cardSuit: 'diamond', color: 'red'},
//     {value: '7', cardSuit: 'diamond', color: 'red'},
//     {value: '8', cardSuit: 'diamond', color: 'red'},
//     {value: '9', cardSuit: 'diamond', color: 'red'},
//     {value: '10', cardSuit: 'diamond', color: 'red'},
//     {value: 'jack', cardSuit: 'diamond', color: 'red'},
//     {value: 'lady', cardSuit: 'diamond', color: 'red'},
//     {value: 'king', cardSuit: 'diamond', color: 'red'},
//     {value: 'ace', cardSuit: 'diamond', color: 'red'},
//     {value: 6, cardSuit: 'clubs', color: 'black'},
//     {value: 7, cardSuit: 'clubs', color: 'black'},
//     {value: 8, cardSuit: 'clubs', color: 'black'},
//     {value: 9, cardSuit: 'clubs', color: 'black'},
//     {value: 10, cardSuit: 'clubs', color: 'black'},
//     {value: 'jack', cardSuit: 'clubs', color: 'black'},
//     {value: 'lady', cardSuit: 'clubs', color: 'black'},
//     {value: 'king', cardSuit: 'clubs', color: 'black'},
//     {value: 'ace', cardSuit: 'clubs', color: 'black'},
//
//
// ]


// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз

// console.log(card.find((item)=>item.value==='ace' && item.cardSuit==='spade'))


// - всі шістки

// console.log(card.filter((item)=>item.value===6))


// - всі червоні карти
// console.log(card.filter((item)=>item.color==='red'))


// - всі буби
// console.log(card.filter((item)=>item.cardSuit==='diamond'))


// - всі трефи від 9 та більше

// let filter = card.filter(function (item){
//     if (item.cardSuit==='clubs' && [9,10,'lady','king', 'jack','ace'].includes(item.value)){
//     return item
// }
// })
// console.log(filter)


//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let reduce = card.reduce((accumulator, cards) => {
//     if (cards.cardSuit === 'spade') {
//         accumulator[0].push(cards)
//     } else if (cards.cardSuit === 'diamond') {
//         accumulator[1].push(cards)
//     }else if (cards.cardSuit === 'heart'){
//         accumulator[2].push(cards)
//     }else accumulator[3].push(cards)
//     return accumulator
// }, [[],[],[],[]])
//
// console.log(reduce)

// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let find = coursesArray.find((item)=> item.modules.includes('sass'))
console.log(find)
let find1 = coursesArray.find((item)=>item.modules.includes('docker'))
console.log(find1)