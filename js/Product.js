class Product {
    constructor(id, title, price, description, category, image, card) {        
        this.id = id;
        this.name = title;
        this.price = price;        
        this.description = description;
        this.category = category;
        this.image = image;
        this.element = card;              
        this.addCartBtnElem = this.element.querySelector("#add_cart_btn");        
        this.addCartBtnElem.onclick = () => {                
                  Content.addToCart(this);
        };        
    };
    
};