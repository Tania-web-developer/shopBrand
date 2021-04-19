class CatalogList {
    constructor(element) {
        this.element = element;
        this.totalElem = document.querySelector('#total');
        console.log(this.totalElem);
        this.arrProduct = [];       
    };    
    updateCatalogFetch() {
        RequestMaker.makeRequest()
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
                this.element.innerHTML = "";                
                data.forEach(element => {
                    this.createProduct(element);
                });
                Content.renderPage(this.arrProduct);
                this.renderTotal();
                                
            })           
    };

    createProduct({ id, title, price, description, category, image }) {
        let template = document.getElementById("template");
        let cardElem = template.content.cloneNode(true);
        let card = cardElem.getElementById("new_product");
        cardElem.querySelector("#price").innerHTML = price;
        cardElem.querySelector("img").src = image;
        cardElem.querySelector("#name").innerHTML = title;
        cardElem.querySelector("#description").innerHTML = description;
        console.log(card);
        console.log(cardElem);
        console.log(cardElem);
        let product = new Product(id, title, price, description, category, image, card);
        this.arrProduct.push(product);
    };

    totalPrice(){
        console.log(this.arrProduct);
        return this.arrProduct.reduce((sum, elem) => sum += elem.price, 0 );        
    }

    renderTotal(){
        console.log(this.totalElem);
        this.totalElem.innerHTML = `total: ${this.totalPrice()}`;
    }

};


