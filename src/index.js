let api = new ApiService();

document.addEventListener("DOMContentLoaded", function (event) {
  api.getProducts().then((products) => {
    console.log(products);
    products.forEach((product) => {
      let name = document.createElement("p");
      let image = document.createElement("img");
      let price = document.createElement("p");
      let description = document.createElement("p");
      let addToCart = document.createElement("button");
      addToCart.classList.add("add-to-cart");
      addToCart.addEventListener("click", function (event) {
        let parentNode = event.target.parentNode;
        let productID = parentNode.getAttribute("data-id");
        api.addToCart(productID);
        let cloneNode = parentNode.cloneNode([true]);
        document.querySelector("#cart-id").append(cloneNode);
        document
          .querySelectorAll("#cart-id .remove-from-cart")
          .forEach((item) => {
            item.addEventListener("click", function (event) {
              let parentNode = event.target.parentNode;
              let productID = parseInt(parentNode.getAttribute("data-id"));
              let findById;
              api.getCartItems().then((products) => {
                products.forEach((item) => {
                  console.log(productID);
                  console.log(item.id);
                  if (item.product_id === productID) {
                    api.deleteFromCart(item.id);
                    parentNode.remove();
                  }
                });
              });
            });
          });
      });

      let removeFromCart = document.createElement("button");
      removeFromCart.classList.add("remove-from-cart");

      price.innerHTML = product.price;
      name.innerHTML = product.name;
      image.setAttribute("src", product.product_img);
      description.innerHTML = product.description;
      addToCart.innerHTML = "Add to Cart";
      removeFromCart.innerHTML = "Remove From Cart";

      let productContainer = document.createElement("div");

      productContainer.setAttribute("data-id", product.id);
      productContainer.setAttribute("data-name", product.name);
      productContainer.setAttribute("data-price", product.price);
      productContainer.classList.add("item-contain");
      productContainer.append(
        image,
        name,
        price,
        description,
        addToCart,
        removeFromCart
      );

      document.querySelector("#product-container").append(productContainer);
    });
  });
});
