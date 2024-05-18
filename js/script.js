const products = document.getElementById("products")


const api = async () => {
    try {
        const res = await fetch("https://dummyjson.com/products")
        if (res.ok) {
            const data = await res.json();
            display(data.products)
        }
        else {
            console.log("Error in fetching")
        }
    }
    catch (err) {
        console.log("Error is: " + err);
    }

}

api()
const display = (item) => {
    item.forEach((x) => {

        // const id = document.createElement("p")
        // products.textContent = x.id

        const items = document.createElement("div")
        items.classList.add("box");
        items.setAttribute("id", "boxs")

        const mdiv = document.createElement("div")
        mdiv.setAttribute("id", "prodDesc")
        // mdiv.style.display = "flex"

        const image = document.createElement("img")
        image.src = x.thumbnail;
        image.alt = x.title;

        const indiv = document.createElement("div")
        indiv.setAttribute("id", "indiv")
        // indiv.style.width = "60%"
        const title = document.createElement("h2")
        title.setAttribute("id", "protitle")


        const link = document.createElement("a")
        link.href = `./product.html?pid=${x.id}`
        link.append(title)
        link.style.textDecoration = "none"
        link.style.color = "black"


        let tit = x.title
        let titl = " "
        if (tit.length >= 26) {
            for (let i = 0; i < 20; i++) {
                titl = titl + tit[i]
            }
        }
        else {
            titl = x.title
        }
        title.textContent = titl

        const desc = document.createElement("p")
        // desc.textContent = x.description
        let description = x.description;
        let abc = "";
        if (description.length >= 60) {
            for (let i = 0; i < 60; i++) {
                abc = abc + description[i]
            }
        }
        else {
            abc = x.description
        }
        desc.textContent = abc + "...";

        indiv.append(link, desc)
        const price = document.createElement("p")
        price.textContent = "Price $" + x.price

        const rating = document.createElement("p")
        rating.textContent = "Rating " + x.rating

        if (x.rating > 4.5) {
            rating.style.color = "green"
        }
        else {
            rating.style.color = "red"
        }
        const indiv2 = document.createElement("div")
        indiv2.setAttribute("id", "price")
        // indiv.style.display = "flex"
        indiv2.append(rating, price)

        mdiv.append(indiv, indiv2)

        const btn = document.createElement("button")
        btn.setAttribute("id", "btn1")
        btn.textContent = "Add to cart"


        items.append(image, mdiv, btn)

        products.appendChild(items)

    });
}

const itemPage = (x) => {

}








// const mainDiv = document.getElementById('main')
// let cart = [];

// document.getElementById("count").textContent = cart.length
// const fetchData = async () => {
//     try {
//         const res = await fetch("https://dummyjson.com/products");
//         if (res.ok) {
//             const data = await res.json()
//             displayData(data.products)
//         }
//         else {
//             console.log("error in fetching")
//         }
//     }
//     catch (err) {
//         console.log("erroer is" + err)
//     }


// }
// fetchData();
// const displayData = (arr) => {
//     arr.forEach((p) => {
//         const proDiv = document.createElement('div');
//         proDiv.classList.add('product')
//         const image = document.createElement('img');
//         image.src = p.thumbnail;
//         image.alt = p.title;
//         const title = document.createElement('h2');
//         title.textContent = p.title;

//         const link = document.createElement('a');
//         link.href = `./Pages/product.html?pid=${p.id}`
//         link.target = "_blank"
//         link.appendChild(title)

//         const price = document.createElement('p');
//         price.textContent = "$ " + p.price

//         const addCart = document.createElement('button')
//         addCart.textContent = "Add To Cart";
//         addCart.addEventListener('click', () => cartLogic(p))
//         proDiv.append(image, link, price, addCart);
//         mainDiv.appendChild(proDiv)
//     })
// }
// const cartLogic = (p) => {
//     cart.push(p)
//     localStorage.setItem('cart', JSON.stringify(cart));
//     document.getElementById('count').textContent = cart.length

// }

