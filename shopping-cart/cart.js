//define the following methods:
cart = [];



//For future: look how messy these functions are, get more comfortable with best practice formatting so it becomes a habit now

function addItem(cart, item, quantity) {
    if (typeof item !== 'string'){
    console.log("Item parameter cannot be a number.")
    return cart;
    } else if (item.length<1) {
        console.log(`Blank entries not allowed.`)
        return cart;
    } else {
    while (quantity > 0) {
    cart.push(item)
    quantity--;
    } return cart;
}};



function removeItem(cart, item){
    try {let searchValue = cart.indexOf(item);
    if (searchValue >= 0){
    cart.splice(searchValue, 1);
    return cart;
    } else {
        console.log("Indicated item not found in cart or cart parameter is faulty.");
        return cart;
    }
} catch(error) {
    console.error(error.message);
} 
}



function getTotalItems(cart){
    if (!Array.isArray(cart)){
        console.log("Cart type error");
        return 0;
    } else {
    return cart.length;
    }
};

addItem(cart, "cheese", 3);
console.log(cart);

//removeItem(cart, "cheese")

getTotalItems(cart);


module.exports = {
    addItem: addItem,
    removeItem: removeItem,
    getTotalItems: getTotalItems
};
