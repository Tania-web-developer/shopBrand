
class Cart {
    constructor() {        
        this.cartProduct = [];
        console.log(this.cartProduct);
    };

    Init(element) {
        this.element = element;             
        this.containerElem = element.querySelector("#add_container");       
        this.updateCart();              
    };   

    
    createProductCart(cartProduct) {
        let template = document.getElementById("template");
        let cartElem = template.content.cloneNode(true);
        cartElem.querySelector("img").src = src;
        cartElem.querySelector("#product_name").innerHTML = cartProduct.name;
        cartElem.querySelector("#product_price").innerHTML = cartProduct.price;
        cartElem.querySelector("#product_color").innerHTML = cartProduct.color;
        cartElem.querySelector("#product_size").innerHTML = cartProduct.category;
        this.containerElem.appendChild(cartElem);
    };

    updateCart() {
        this.containerElem.innerHTML = "";
        this.cartProduct.forEach(element => {
            this.createProductCart(element);
        });       
    };
};