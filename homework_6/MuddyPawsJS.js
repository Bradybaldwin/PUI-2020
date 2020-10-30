/* Empty Array for cart items to populate */
var cartItemArr = []

/* This class contains all of the properties of a single cart order object */
 class Order {
     constructor(name, price, size, color) {
         this.name = name;
         this.price = price;
         this.size = size;
         this.color = color;
     }
 }

/* Each of these variables will be replaced with the value for the cart item
They represent the four properties of a single cart order object:
Name of item, price of item, color of item, and size of item*/
var itemName = 'blank';
var itemPrice = 'blank';
var itemSize = 'blank';
var itemColor = 'blank';

/* This function changes the color of the square next to the color drop down menu and changes
the img source of the backpack image to mathc the color selected */
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

/* This function changes the displayed price to match the price of the sized backpack
that the user select  */
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

/* This function populates the four empty variables and then adds the variables as 
the four properties of the Order class and then pushes that new object into the 
CartItemArr array */
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

/* This function stringify's the cartItemArr array in local storage*/
function storeCartOrder(){
    localStorage.setItem('cart', JSON.stringify(cartItemArr))
}

/* This function gets the cart array form local storage, parses it, updates the cart
count to reflect the legnth of the array, and then writes two lines of HTML for each
cart item that list the cart item's four properties*/
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



