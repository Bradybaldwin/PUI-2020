class Order {
    constructor(name, price, size, color) {
        this.name = name;
        this.price = price;
        this.size = size; 
        this.color = color;
    }
}



function addToCart(){
    var cartTotalDisplay = document.getElementById('cartCount').innerHTML;
    var cartCounter = document.getElementById('cartCount');
    cartCounter.innerHTML = Number(cartTotalDisplay) + 1;
}