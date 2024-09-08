// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули


let arrObject = document.getElementById('list')

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {

        for (const user of users) {
            let divUser = document.createElement('div')
            divUser.innerText = `id:${user.id} name: ${user.name}`
            divUser.className = 'divUser'
            arrObject.appendChild(divUser)
            let button = document.createElement("button")
            button.innerText = `user-details`
            button.className = 'det'
            arrObject.appendChild(button)

            localStorage.setItem('users', JSON.stringify(users))


            button.onclick = () => {
                location.href = `../user-details/index.html?userId=${user.id}`;

            }
        }
    })

document.body.appendChild(arrObject)







