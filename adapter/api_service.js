class ApiService {
    constructor() {

        this.baseUrl = "http://127.0.0.1:3000/" 
    }

    getProducts() {
        return fetch(`${this.baseUrl}/products`) 
        .then(resp => resp.json())
    }

    getCertainProduct(prodId) {
        return fetch(`${this.baseUrl}/products/${prodId}`)
        .then(resp => resp.json())
    }
}