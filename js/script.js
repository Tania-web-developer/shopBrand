"use strict";


const data = {
    arr: [
        {
            product_id: 1,
            brand: "MANGO PEOPLE",
            name: "T - SHIRT",
            src: "./img/image__1.jpg",
            description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
            price: 300,
            color: "red",
            size: "XL",

        },
        {
            product_id: 2,
            brand: "MANGO PEOPLE",
            name: "T - SHIRT",
            src: "./img/image__1.jpg",
            description: `Known for her sculptural takes 
                on traditional tailoring, 
                Australian arbiter of cool Kym Ellery teams up
                with Moda Operandi.`,
            price: 300,
            color: "red",
            size: "XL",

        },
        {
            product_id: 3,
            brand: "MANGO PEOPLE",
            name: "T - SHIRT",
            src: "./img/image__1.jpg",
            description: "",
            price: 300,
            color: "red",
            size: "XL",

        },
        {
            product_id: 4,
            brand: "MANGO PEOPLE",
            name: "T - SHIRT",
            src: "./img/image__1.jpg",
            description: "",
            price: 300,
            color: "red",
            size: "XL",

        },
        {
            product_id: 5,
            brand: "MANGO PEOPLE",
            name: "T - SHIRT",
            src: "./img/image__1.jpg",
            description: "",
            price: 300,
            color: "red",
            size: "XL",

        },
        {
            product_id: 6,
            brand: "MANGO PEOPLE",
            name: "T - SHIRT",
            src: "./img/image__1.jpg",
            description: "",
            price: 300,
            color: "red",
            size: "XL",

        },
        {
            product_id: 7,
            brand: "MANGO PEOPLE",
            name: "T - SHIRT",
            src: "./img/image__1.jpg",
            description: "",
            price: 300,
            color: "red",
            size: "XL",

        },
        {
            product_id: 8,
            brand: "MANGO PEOPLE",
            name: "T - SHIRT",
            src: "./img/image__1.jpg",
            description: "",
            price: 300,
            color: "red",
            size: "XL",

        },

    ],
    getData() {
        return this.arr
    }
};

const product = {
    card: null,
    init(productObj) {
        const cardElem = document.querySelector("#card").content.cloneNode(true);
        cardElem.querySelector("#price").innerHTML = productObj.price;
        cardElem.querySelector("img").src = productObj.src;
        cardElem.querySelector("#name").innerHTML = productObj.name;
        this.card = cardElem;
    },
    getCard(productObj){
        return this.init(productObj);
    }
};

const catalog = {
    product,
    productListElem: document.getElementById("catalog_list"),

    init(data) {
        data.forEach(productObj => {
            this.product.getCard(productObj);
            this.productListElem.appendChild(this.product.card);

        });
    },

    render(productObj) {
        this.product.init(productObj)
        this.productListElem.appendChild(this.product.card);
    },

};

const cart = {
    template: document.querySelector("#product_cart"),
    productsCartArr: null,
    productsList: document.querySelector("cart-list"),

    init() {
        this.productsCartArr.forEach(elem => {
            this.renderCartProduct(elem);
        });
    },

    renderCartProduct({ src, name, price, color, size }) {
        let newCardElem = this.template.content.cloneNode(true);
        newCardElem.querySelector("img").src = src;
        newCardElem.querySelector("#product_name").innerHTML = name;
        newCardElem.querySelector("#product_price").innerHTML = price;
        newCardElem.querySelector("#product_color").innerHTML = color;
        newCardElem.querySelector("#product_size").innerHTML = size;
        this.productsList.appendChild(newCardElem);
    },

    addToCart(elem) {
        this.productsCartArr = [];
        if (this.isElemInCart(elem)) {
            this.productsCartArr.push({
                product_id: productObj.product_id,
                brand: productObj.brand,
                name: productObj.name,
                src: productObj.src,
                description: productObj.description,
                price: productObj.price,
                color: productObj.color,
                size: productObj.size,
            });
            console.log(this.productsCartArr);
        } else {
            alert('This product have  already added to the cart');
            console.log(this.productsCartArr);
        }
    },

    isElemInCart(elem) {
        return this.productsCartArr.find((item) => item.product_id === elem.product_id) != -1;
    },
};


const shop = {
    // header,
    // footer,
    data,
    cart,
    catalog,
    // product,
    // registration,
    // home, 

    init() {
        this.catalog.init(this.data.getData());        
    },

    setEventHandlers() {
       
    },


};

window.addEventListener('load', () => shop.init());








