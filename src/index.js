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

            addToCart.addEventListener("click", function(event){

                let parentNode = event.target.parentNode;
                let productID = parentNode.getAttribute("data-id")
                api.addToCart(productID).then((event)=>{
                    console.log(event)
                })
                let cloneNode = parentNode.cloneNode([true])
                document.querySelector("#cart-id").append(cloneNode)
            })

            price.innerHTML = product.price;
            name.innerHTML = product.name;
            image.setAttribute("src", product.product_img);
            description.innerHTML = product.description;
            addToCart.innerHTML = "Add to Cart";

            let productContainer = document.createElement("div")
            productContainer.setAttribute("data-id", product.id);
            productContainer.setAttribute("data-name", product.name);
            productContainer.setAttribute("data-price", product.price);
            productContainer.classList.add("item-contain");
            productContainer.append(image, name, price, description, addToCart);

            document.querySelector("#product-container").append(productContainer)

            
        })
    })
})


// let api = new ApiService();

// document.addEventListener("DOMContentLoaded", function (event) {
//   api.getProducts(product)
//     .then((products) => {
//     console.log(products);
//     products.forEach(() => {
//       let name = document.createElement("p");
//       let image = document.createElement("img");
//       let price = document.createElement("p");
//       let description = document.createElement("p");
//       let addToCart = document.createElement("button");

//     //   addToCart.addEventListener("click", function (event) {
//     //     console.log(event);
//     //     let eventTarget = event.target;
//     //     let parentNode = eventTarget.parentNode;
//     //     let id = parentNode.getAttribute("data-id");
//     //     let name = parentNode.getAttribute("data-name");
//     //     let price = parentNode.getAttribute("data-price");

//     //     api.addToCart(id, name, price).then((ethan) => {
//     //       console.log(ethan);
//     //     });

     

// //       price.innerHTML = product.price;
// //       name.innerHTML = product.name;
// //       image.setAttribute("src", product.product_img);
// //       description.innerHTML = product.description;
// //       addToCart.innerHTML = "Add to Cart";

// //       let productContainer = document.createElement("div");
    //   productContainer.setAttribute("data-id", product.id);
    //   productContainer.setAttribute("data-name", product.name);
    //   productContainer.setAttribute("data-price", product.price);
// //       productContainer.classList.add("item-contain");

//      productContainer.append(image, name, price, description, addToCart);

// //       document.querySelector("#product-container").append(productContainer);
// //     });
//    });
//   });
// });
