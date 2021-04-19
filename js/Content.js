"use strict";

class Content {
    static Init(element) {
        this.element = element;
        this.containerElem = element.querySelector("#add_container");
        this.catalog = new CatalogList(this.containerElem); 
        this.catalog.updateCatalogFetch();      
        this.cart = new Cart();        
    };
    
    static addToCart(elem){
        this.cart.cartProduct.push(elem);               
    }

    static renderPage(arr) {
        arr.forEach(element => {
            this.containerElem.appendChild(element.element);
        });       
    };

};
