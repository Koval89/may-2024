// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


const postI = new URL(location.href).searchParams.get('postId');
console.log(postI)


let postPost = JSON.parse(localStorage.getItem('post'))
console.log(postPost)


let divP = document.createElement('div')

let divLi = document.createElement('div')
divLi.className='divLi'

let divPosts = document.createElement('li');
divPosts.innerText = `
            userId:${postPost.userId} 
            id:${postPost.id} 
            title:${postPost.title} 
            body:${postPost.body}`;

divLi.appendChild(divPosts)
divP.appendChild(divLi)

let buttonComments = document.createElement('button')
buttonComments.innerText = 'Comments'
buttonComments.className = 'btnComments'

buttonComments.onclick = ()=>{
// location.href = `../comments/index.html?comments`
    let div1 = document.createElement('div')
    div1.className='div1'
    fetch('https://jsonplaceholder.typicode.com/comments?postId='+postPost.id)
        .then((response)=> response.json())
        .then((comment)=>{
            for (const divCommentElement of comment) {
                let divComment = document.createElement('li')
                console.log(comment)
                divComment.innerText = `
        id:${divCommentElement.id}
        name:${divCommentElement.name}`
                div1.appendChild(divComment)

                for (let i = 0; i < comment.length; i++) {
                    if (comment.length === 5) {
                        buttonComments.disabled = true
                    }

                }

            }

        })
document.body.appendChild(div1)
}

document.body.append(divP, buttonComments)


