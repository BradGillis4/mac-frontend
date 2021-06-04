class ApiService {
  constructor() {
    this.baseUrl = "http://127.0.0.1:3000";
  }

  getProducts() {
    return fetch(`${this.baseUrl}/products`).then((resp) => resp.json());
  }

  getCertainProduct(prodId) {
    return fetch(`${this.baseUrl}/products/${prodId}`).then((resp) =>
      resp.json()
    );
  }

  getCartItems() {
    return fetch(`${this.baseUrl}/carts`, {
    })
    .then(response => response.json())
    .then(data => data)
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  addToCart(id) {
    return fetch(`${this.baseUrl}/carts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        product_id: id,
      }),
    }).then((resp) => {
      console.log(resp);
      resp.json();
    });
  }

  deleteFromCart(cartDivId) {
    console.log("ethan");
    console.log(cartDivId);
    return fetch(`${this.baseUrl}/carts/${cartDivId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: cartDivId,
      }),
    }).then((resp) => console.log(resp));
  }

}
