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
        title.setAttribute("id","protitle")
        // title.textContent = x.title
        // title.style.fontSize = "20px"
        // title.style.fontWeight = "600"
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

        indiv.append(title, desc)
        const price = document.createElement("p")
        price.textContent = "Price $" + x.price

        const rating = document.createElement("p")
        rating.textContent = "Rating " + x.rating

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

