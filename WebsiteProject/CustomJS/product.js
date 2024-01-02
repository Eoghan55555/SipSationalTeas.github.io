function AddToBasket() {
    //Gets the values from the store page
    var stringpriceElement = document.getElementById('product_price');
    var stringquantity = document.getElementById('quantity').value;
    var product_id = document.getElementById('product_id').value;

    //Turns the string into a float
    var stringprice = stringpriceElement.innerText;
    var numericprice = parseFloat(stringprice.replace('Price: €', '').trim());
    var numericquantity = parseFloat(stringquantity);
    //Gets the total price
    var total_price = numericprice*numericquantity;

    //Gets the basket which is an array
    var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];

    // Add the new item to the basket
    var newItem = {
        product_id: product_id,
        quantity: numericquantity,
        total_price: total_price
    };
    basketItems.push(newItem);

    // Save the updated basket items back to local storage
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
    //Alert to confirm that item has been added to the basket
    var show_addToBasket = document.getElementById('addToBasket');
    show_addToBasket.classList.remove('d-none');
}
