 let api = new ApiService

document.addEventListener('DOMContentLoaded', function(event) {
    
    api.getProducts()
    .then(products =>  {
        console.log(products)
        products.forEach(product => {
            
            let name = document.createElement("p")
            let image = document.createElement("img")
            let price = document.createElement("p")
            let description = document.createElement("p")
            let addToCart = document.createElement("button")

            price.innerHTML = product.price;
            name.innerHTML = product.name;
            image.setAttribute("src", product.product_img);
            description.innerHTML = product.description;
            addToCart.innerHTML = "Add to Cart";

            let productContainer = document.createElement("div")
            productContainer.classList.add("item-contain");
            
            productContainer.append(image, name, price, addToCart);
            productContainerHover.append(description);

            document.querySelector("#product-container").append(productContainer)

            
        })
    })
})
