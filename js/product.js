let url = new URLSearchParams(window.location.search)
let id = url.get("pid")
const product = document.getElementById("product")
const fetchData = async () => {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        if (res.ok) {
            const data = await res.json()
            displayData(data)
        }
        else {
            console.log("error in fetching");
        }
    }
    catch (err) {
        console.log(err);
    }
}

fetchData();
const displayData = (data) => {
    console.log(data.thumbnail)
    const leftDiv = document.createElement('div')
    leftDiv.classList.add("leftDiv")
    // leftDiv.style.display = "flex";
    const image = document.createElement('img')
    image.setAttribute("id", "mimg")
    image.style.height = "313px"
    image.style.width = "558px"
    image.src = data.thumbnail;
    image.alt = data.title;

    console.log(data.thumbnail)
    const imgDiv = document.createElement("div")
    imgDiv.setAttribute("id", "nimg")
    data.images.forEach((i) => {
        const image1 = document.createElement("img")
        image1.src = i
        image1.alt = data.title
        image1.style.height = "50px"
        imgDiv.appendChild(image1)
        image1.addEventListener("click", () => {
            image.src = image1.src
        })
    })

    leftDiv.append(imgDiv, image)

    const rightDiv = document.createElement("div")
    rightDiv.setAttribute("id", "rightDiv")
    const title = document.createElement("h2")
    title.textContent = data.title
    const link = document.createElement("a")
    link.href = `./product.html?pid=${data.id}`
    link.target = "_blank"
    link.style.textDecoration = "none";
    link.appendChild(title)

    const desc = document.createElement("p")
    desc.textContent = data.description;

    const rating = document.createElement("p")
    rating.textContent = "Rating " + data.rating
    rating.style.fontWeight = "600"
    rating.style.fontSize = "20px"


    if (data.rating > 4.5) {
        rating.style.color = "green"
    }


    const price = document.createElement("p")
    price.textContent = "Price $ " + data.price
    // price.style.color = "#FFEB3B"
    price.style.fontWeight = "600"
    price.style.fontSize = "20px"

    const addCart = document.createElement("button")
    addCart.setAttribute("id", "btn2")
    addCart.textContent = "Add To Cart"
    rightDiv.append(link, desc, rating, price, addCart)
    product.append(leftDiv, rightDiv)
}

