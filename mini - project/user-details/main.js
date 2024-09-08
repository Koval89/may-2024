// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const userId = new URL(location.href).searchParams.get('userId');
console.log(userId)


const foo = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    let user = await response.json()
    const details = document.getElementById('detail')
    let div = document.createElement('div')
    let ul = document.createElement('ul')
    const id = document.createElement('li');
    let username = document.createElement('li')
    let email = document.createElement('li')
    let street = document.createElement('li')
    let suite = document.createElement('li')
    let city = document.createElement('li')
    let zipcode = document.createElement('li')
    let lat = document.createElement('li')
    let lng = document.createElement('li')
    let phone = document.createElement('li')
    let website = document.createElement('li')
    let name = document.createElement('li')
    let catchPhrase = document.createElement('li')
    let bs = document.createElement('li')


    id.innerText = `id:${user.id}`
    username.innerText = `username:${user.username}`
    email.innerText = `email:${user.email}`
    street.innerText = `street:${user.address.street}`
    suite.innerText = `suite:${user.address.suite}`
    city.innerText = `city:${user.address.city}`
    zipcode.innerText = `zipcode:${user.address.zipcode}`
    lat.innerText = `lat:${user.address.lat}`
    lng.innerText = `lng:${user.address.lng}`
    phone.innerText = `phone:${user.phone}`
    website.innerText = `website:${user.website}`
    name.innerText = `name:${user.company.name}`
    catchPhrase.innerText = `catchPhrase:${user.company.catchPhrase}`
    bs.innerText = `bs:${user.company.bs}`


    let buttonPost = document.getElementById('buttonPost')

    buttonPost.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=` + user.id)
            .then((response) => response.json())
            .then((posts) => {
                let divLi = document.createElement('div')
                divLi.className='divLi'
                for (const post of posts) {
                    console.log(post)



                    let divPost = document.createElement('li');
                    divPost.className = 'divPost'
                    divPost.innerText = `${post.id} ${post.title}`;
                    let postDetails = document.createElement('button')
                    postDetails.className = 'postDetails'
                    postDetails.innerText = 'post-details'
                    postDetails.onclick=()=>{
                        location.href = `../post - details/index.html?postId=${post.id}`;
                        localStorage.setItem('post', JSON.stringify(post))
                    }

                    divLi.appendChild(divPost);
                    divPost.appendChild(postDetails)
                    details.appendChild(divLi)

                    for (let i = 0; i < posts.length; i++) {
                        if (posts.length === 10) {
                            buttonPost.disabled = true
                        }

                    }

                }

            });

    };


    div.appendChild(ul)
    ul.append(id, username, email, street, suite, city, zipcode, lat, lng, phone, website, name, catchPhrase, bs)
    details.append(div, buttonPost)

}


void foo()


