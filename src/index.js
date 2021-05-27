document.addEventListener("DOMContentLoaded", () => {
    fetchProducts()
})

function fetchProducts(){
    const productsContainer = document.getElementById("product-container")
fetch("http://127.0.0.1:3000/products")
    .then(r => r.json())
    .then(data => {
        data.forEach(function(product){
            productsContainer.innerHTML += `<li>${product.name}</li>`
        })
    })
    .catch(err => console.warn(err))
}