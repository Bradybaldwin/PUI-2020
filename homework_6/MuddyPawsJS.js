var cartItemArr = []

 class Order {
     constructor(name, price, size, color) {
         this.name = name;
         this.price = price;
         this.size = size;
         this.color = color;
     }
 }

var itemName = 'blank';
var itemPrice = 'blank';
var itemSize = 'blank';
var itemColor = 'blank';

function colorShift(){
    var colors = document.getElementsByName('colors');
    var chosenColor = 'none'
    for (var i = 0; i < colors.length; i++) {
        if(colors[i].selected){
            chosenColor = colors[i].value;
            if (chosenColor == 'Tropical Teal'){
                document.getElementById("colorSquare").style.backgroundColor = "Teal";
                document.getElementById("backpackGraphic").src="Images/Cat_Backpack_crop.jpg";
            }
            else if (chosenColor == 'Galaxy Purple'){
                document.getElementById("colorSquare").style.backgroundColor = "Purple";
                document.getElementById("backpackGraphic").src="Images/Cat_Backpack_crop_purple.png";
            }
            else {
                document.getElementById("colorSquare").style.backgroundColor = "Green";
                document.getElementById("backpackGraphic").src="Images/Cat_Backpack_crop_green.png";
            }
        }
    }
}

function sizeShift(){
    var sizes = document.getElementsByName('sizes');
    var chosenSize = 'none'
    for (var i = 0; i < sizes.length; i++) {
        if(sizes[i].selected){
            chosenSize = sizes[i].value;
            if (chosenSize == 'Medium (40 Liters)'){
                    document.getElementById("detailPrice").innerHTML = "$110.00";
            }
            else if (chosenSize == 'Large (50 Liters)'){
                document.getElementById("detailPrice").innerHTML = "$120.00";
            }
            else if (chosenSize == 'Small (30 Liters)'){
                document.getElementById("detailPrice").innerHTML = "$100.00";
            }
        }
    }
}

function addToCart(){
    var cartTotalDisplay = document.getElementById('cartCount').innerHTML;
    var cartCounter = document.getElementById('cartCount');
    cartCounter.innerHTML = Number(cartTotalDisplay) + 1;

    var itemName = document.getElementById('detailTitle').innerHTML;
    var itemPrice = document.getElementById('detailPrice').innerHTML;

    var sizes = document.getElementsByName('sizes');
    for (var i = 0; i < sizes.length; i++) {
        if(sizes[i].selected){
            itemSize = sizes[i].value;
        }
    }

    var colors = document.getElementsByName('colors');
    for (var i = 0; i < colors.length; i++) {
        if(colors[i].selected){
            itemColor = colors[i].value;
        }
    }

    var cartOrder = new Order(itemName, itemPrice, itemSize, itemColor)
    cartItemArr.push(cartOrder)
    console.log(cartItemArr)
}

function storeCartOrder(){
    localStorage.setItem('cart', JSON.stringify(cartItemArr))
}

function cartCountPersist(){
    myStorage = window.localStorage;
    var cartDisplay = myStorage.getItem('cart')
    var cartItemArrLoaded = JSON.parse(cartDisplay)

    document.getElementById('cartCount').innerHTML = cartItemArrLoaded.length

    var cartList = 'Cart is Work in Progress <br>'
    for (var i = 0; i<cartItemArrLoaded.length; i++) {
        cartList = cartList +'<br>'+ cartItemArrLoaded[i].name +" "+ cartItemArrLoaded[i].price +'<br>'+ cartItemArrLoaded[i].size +" "+ cartItemArrLoaded[i].color + '<br>'
    }
    document.getElementById('cartNoItems').innerHTML = cartList
}

var cartSubTotal = 0
var cartShipTotal = 0
var cartGrandTotal = 0



