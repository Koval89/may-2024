// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.

// let list = document.createElement('div')


let div = document.createElement('div');
fetch('https://dummyjson.com/carts')
    .then((response) => response.json())
    .then((value) => {
        let {carts} = value;

        for (const cart of carts) {
            console.log(cart);
            // let olWithLi = document.createElement('div')
            let li = document.createElement('div');
            li.innerText = `id:${cart.id}
                             total:${cart.total}
                             discountedTotal: ${cart.discountedTotal}
                             userId: ${cart.userId}
                             totalProducts: ${cart.totalProducts}
                             totalQuantity: ${cart.totalQuantity}`;
            div.appendChild(li)
            let olWithLi = document.createElement('ol')
            for (const cartElement of cart.products) {
                let liProducts = document.createElement('li')
                liProducts.innerText = `
                id:${cartElement.id}
                title:${cartElement.title}
                price:${cartElement.price}
                quantity:${cartElement.quantity}
                total:${cartElement.total}
                discountPercentage:${cartElement.discountPercentage}
                discountedTotal:${cartElement.discountedTotal}
                `

                const img = document.createElement('img')
                img.src = cartElement.thumbnail;
                liProducts.appendChild(img)
                olWithLi.appendChild(liProducts)
                div.appendChild(olWithLi)
            }


        }
    })


document.body.appendChild(div)


//
//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
//     Інгредієнти повинні бути список під час відображення.

// let div = document.createElement('div')
// fetch('https://dummyjson.com/recipes')
//     .then((response) => response.json())
//     .then((value) => {
//         let {recipes} = value;
//         for (const recipe of recipes) {
//             let liRecipe = document.createElement('li')
//             liRecipe.innerText = `id: ${recipe.id} name:${recipe.name}`
//             div.appendChild(liRecipe)
//         }
//     })
// document.body.appendChild(div)