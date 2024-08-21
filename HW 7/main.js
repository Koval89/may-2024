// // #XjJuucOMR0
// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user = [
//     new User(1,'vasya','vasyok','vasya@gmail.com','0663952624'),
//     new User(2,'petya','pet', 'petya@fmail.com','0663985648'),
//     new User(3,'Olya','Olya', 'olya@fmail.com','0995689631'),
//     new User(4,'kokos','kokos', 'kokos@fmail.com','0678956354'),
//     new User(5,'abrikos','abrikos', 'abrikos@fmail.com','0983645965'),
//     new User(6,'sluva','sluva', 'sluva@fmail.com','0986356948'),
//     new User(7,'grysha','grysha', 'grysha@fmail.com','0996598545'),
//     new User(8,'vunograd','vunograd', 'vunograd@fmail.com','0675694695'),
//     new User(9,'yablyko','yablyko', 'yablyko@fmail.com','0668963659'),
//     new User(10,'banan','banan', 'banan@fmail.com','0678956397'),
//
// ]
// console.log(user)


//
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

// console.log(user.filter((item) => {
//     if (item.id % 2 === 0) {
//         console.log(item)
//     }
// }));


// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(user.sort((user1, user2) => user2.id - user1.id));


//
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//         // this.order = {product:['orange','banan','kokos','grysha']};
//     }
// }
//
// let clients = [
//     new Client(1,'kokos','kokos','kokos@gmail.com','0996495631',['orange','banan']),
//     new Client(2,'abricos','abricos','abricos@gmail.com','06659874536',['kokos','grysha']),
//     new Client(3,'grysha','grysha','grysha@gmail.com','0965364956',['banan','kokos']),
//     new Client(4,'yablyko','yablyko','yablyko@gmail.com','0678963654',['orange','banan','kokos','grysha']),
//     new Client(5,'zefir','zefir','zefir@gmail.com','0678956326',['orange','banan','grysha']),
//     new Client(6,'vunograd','vunograd','vunograd@gmail.com','0996359463',['banan','kokos','grysha']),
//     new Client(7,'persuk','persuk','persuk@gmail.com','06789636549',['orange','banan','grysha']),
//     new Client(8,'sluva','sluva','sluva@gmail.com','0992369548',['orange','banan','kokos']),
//     new Client(9,'banan','banan','banan@gmail.com','0678963569',['orange','banan','kokos','grysha']),
//     new Client(10,'orange','orange','orange@gmail.com','0678963654',['banan','kokos','grysha'])
// ]
// console.log(clients)


//
//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(clients.sort((item1, item2) =>
//     item2.order.length - item1.order.length
// ));

//
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// function Car(model, producer, age, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.age = age;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//     this.info = function () {
//         console.log('--------Info------------')
//         console.log('model:',this.model)
//         console.log('producer:',this.producer)
//         console.log('age:', this.age)
//         console.log('maxSpeed:', this.maxSpeed)
//         console.log('engineVolume:', this.engineVolume)
//         console.log(`driver : ${this.driver?.name} | ${this.driver?.age} | ${this.driver?.exp}`);
//         console.log('driver:', this.driver)
//         console.log('--------Info------------')
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed
//
//     }
//     this.changeYear = function (newValue) {
//         return this.age = newValue
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new Car('ford', 'Ford Motor', 5, 185, 1.8)
// console.log(car);
// car.drive()
// car.info()
// car.increaseMaxSpeed(5)
// car.changeYear(3)
// car.addDriver({name: 'vasya', age: 36, exp:2})
//
// car.info()


//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// class Car1{
//     constructor(model, producer, age, maxSpeed, engineVolume) {
//         this.model=model
//         this.producer=producer
//         this.age=age
//         this.maxSpeed=maxSpeed
//         this.engineVolume=engineVolume
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info(){
//         console.log('---------------------')
//         console.log('model:',this.model)
//         console.log('producer', this.producer)
//         console.log('age:',this.age)
//         console.log('msxSpeed',this.maxSpeed)
//         console.log('engineVolume:', this.engineVolume)
//         console.log('driver',this.driver)
//         console.log(`driver: ${this.driver?.name} | ${this.driver?.age} | ${this.driver?.starus}`)
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed = this.maxSpeed+newSpeed
//     }
//     changeYear (newValue){
//         this.age = newValue
//     }
//     addDriver (driver){
//         this.driver = driver
//     }
// }
// let car1 = new Car1('kia','Kia Corporation',3,165,2)
// console.log(car1)
//
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(10)
// car1.info()
// car1.changeYear(5)
// car1.info()
// car1.addDriver({name:'kokos', age:35, starus: true})
// car1.info()
//


//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Cinderella(name, age, footSize) {
//     this.name = name
//     this.age = age
//     this.footSize = footSize
// }
//
// let cinderella1 = [
//     new Cinderella('fodoris', 20, 36),
//     new Cinderella('fodoris1', 21, 38),
//     new Cinderella('fodoris2', 22, 40),
//     new Cinderella('fodoris3', 23, 50),
//     new Cinderella('fodoris4', 24, 60),
//     new Cinderella('fodoris5', 25, 25),
//     new Cinderella('fodoris6', 26, 31),
//     new Cinderella('fodoris7', 27, 44),
//     new Cinderella('fodoris8', 28, 69),
//     new Cinderella('fodoris9', 29, 37)
// ]
//
// function Princ(name, age, foundFootSize) {
//     this.name = name;
//     this.age = age;
//     this.foundFootSize = foundFootSize
// }
//
// let princ = new Princ('jack', 35, 25)
//
// for (const cinderellaElement of cinderella1) {
//     if (cinderellaElement.footSize === princ.foundFootSize) {
//         console.log(cinderellaElement)
//     }
// }
// let cinderella2 = cinderella1.find((value) => value.footSize === princ.foundFootSize)
// console.log(cinderella2)
// princ.wife = cinderella2
// console.log(princ)


//
//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

// Array.prototype.myForEach = function (callback) {
//     const youArray = this
//     for (const item of youArray) {
//         callback(item)
//     }
// };
// [11,22,33].myForEach((x)=>console.log(x))

Array.prototype.myFilter = function (call){
    const myArray = this
    for (const myArrayElement of myArray) {
        if (myArrayElement % 2 !== 0){
            call (myArrayElement)
        }

    }
};

[11,15,63,55,44,66,22,88].myFilter((item)=>console.log(item))

