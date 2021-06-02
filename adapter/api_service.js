class ApiService {
    constructor() {
        this.baseUrl = "http://127.0.0.1:3000" 
    }

    getProducts() {
        return fetch(`${this.baseUrl}/products`) 
        .then(resp => resp.json())
    }

    getCertainProduct(prodId) {
        return fetch(`${this.baseUrl}/products/${prodId}`)
        .then(resp => resp.json())
    }
    addToCart(id) {
       
        return fetch(`${this.baseUrl}/carts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                product_id: id
            })
        }) 
        .then(resp => {
            console.log(resp)
            resp.json()
        })
        
    }

    updateCartWithProduct(cartDivId, item) {
        // console.log(item)
        return fetch (`${this.baseUrl}/carts/${cartDivId}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                cart_id: cartDivId,
           product_id: item.id
            })
        })
        .then(resp => resp.json())
        console.log(cartDivId) // WORKING
    }

//     subtractProductFromCart(cartDivId, productInCart) {
//         // console.log(cartDivId)
//         return fetch (`${this.baseUrl}/carts/${cartDivId}`, {
//             method: "PATCH", 
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             }, 
//             body: JSON.stringify({
//                 cart_id: cartDivId,
//                 subtract_product_id: productInCart.id
//             })
//         })
//         .then(resp => resp.json())
//     }
}