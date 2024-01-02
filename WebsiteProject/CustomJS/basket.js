document.addEventListener('DOMContentLoaded', displayBasket, false);

function displayBasket() {
    //Gets the basket array
    var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    //Div where the basket will be displayed
    var basketDisplayDiv = document.getElementById('basketDisplay');
    //Starts the totalPrice to be 0
    var totalPrice = 0;

    if (basketItems.length > 0) {
        // Clear existing content
        basketDisplayDiv.innerHTML = "";

        basketItems.forEach(function (item, index) {
            // A container for each item in the div
            var container = document.createElement('div');
            container.className = 'container';

            // A div within the container
            var itemDiv = document.createElement('div');
            itemDiv.className = 'basket-item';

            // Elements for the items in the basket
            var productImage = document.createElement("img");
            var Title = document.createElement("h6");
            var ProductDetailsList = document.createElement("ul");
            //Gets the right image and name for the item based on the product id
            if (item.product_id === "1"){
                productImage.src = "Images/eleven_tea.jpg";
                itemDiv.appendChild(productImage);
                Title.innerText="Eleven O'Clock";
                itemDiv.appendChild(Title);
            }
            else if (item.product_id === "2"){
                productImage.src = "Images/oolong_tea.jpg";
                itemDiv.appendChild(productImage);
                Title.innerText="Peach Oolong Tea";
                itemDiv.appendChild(Title);
            }
            else if (item.product_id === "3"){
                productImage.src = "Images/Tetley.jpg";
                itemDiv.appendChild(productImage);
                Title.innerText="Tetley Original";
                itemDiv.appendChild(Title);
            }
            else if (item.product_id === "4"){
                productImage.src = "Images/bell_tea.jpg";
                itemDiv.appendChild(productImage);
                Title.innerText="Bell Tea";
                itemDiv.appendChild(Title);
            }
            else if (item.product_id === "5"){
                productImage.src = "Images/luzianne_ice.jpg";
                itemDiv.appendChild(productImage);
                Title.innerText="Luzianne Ice Tea";
                itemDiv.appendChild(Title);
            }
            else if (item.product_id === "6"){
                productImage.src = "Images/ice_tea1.jpg";
                itemDiv.appendChild(productImage);
                Title.innerText="Zen Boost Ice Tea";
                itemDiv.appendChild(Title);
            }
            //Quantity
            var quantityText = document.createTextNode(`Quantity: ${item.quantity}`);
            var quantityList = document.createElement('li');
            quantityList.appendChild(quantityText);
            ProductDetailsList.appendChild(quantityList);
            
            //Price
            var pricetext = document.createTextNode(`Price: €${item.total_price}`);
            var priceList = document.createElement('li');
            priceList.appendChild(pricetext);
            ProductDetailsList.appendChild(priceList);
            //Append the item div to the container
            container.appendChild(itemDiv);

            //Append the remove button to the container
            var removeButton = document.createElement('button');
            removeButton.innerText = 'Remove';
            removeButton.classList.add('btn');
            removeButton.classList.add('removebutton');
            removeButton.addEventListener('click', function() {
                //Remove function
                removeFromBasket(index); 
                //Display Basket Function is recalled
                displayBasket();
            });
            container.appendChild(removeButton);

            // Append the container to the basket display div
            itemDiv.appendChild(ProductDetailsList);
            basketDisplayDiv.appendChild(container);

            // Add the item price to the total
            totalPrice += item.total_price;
        });

        // Display the total price
        showPrice(totalPrice);
    } else {
        basketDisplayDiv.innerHTML = "Basket is empty.";
    }
}

//Function to remove an item from the basket
function removeFromBasket(index) {
    var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];

    // Remove the item at the specified index
    basketItems.splice(index, 1);

    // Save the updated basket items back to local storage
    localStorage.setItem('basketItems', JSON.stringify(basketItems));

    //The page then refreshes
    window.location.href = window.location.href;
}

function showPrice(totalPrice) {
    //Gets the div for total price
    var pricingElement = document.getElementById('Pricing');
    //Makes sure the total stays at two decimals
    var formattedTotalPrice = parseFloat(totalPrice).toFixed(2);
    var priceList = document.createElement('h5');
    var priceText = document.createTextNode(`Total Price: €${formattedTotalPrice}`);
    priceList.appendChild(priceText);

    // Clear previous content
    pricingElement.innerHTML = "";

    // Append the total price
    pricingElement.appendChild(priceList);

    // Button for Checkout
    var checkoutButton = document.createElement('button');
    checkoutButton.innerText = 'Proceed to Checkout';
    checkoutButton.classList.add('btn');
    checkoutButton.addEventListener('click', function() {
    const confirmLogin=localStorage.getItem('loggedIn');
    //Check if user is logged in or not
    if (confirmLogin==="true"){
        // Redirect to checkout.html
        window.location.href = 'checkout.html';
    }
    else{
        localStorage.setItem('checkOutAttempt',true);
        // Redirect to sign.html
        window.location.href = 'signin.html';
    }   
    });
    // Append the checkout button
    pricingElement.appendChild(checkoutButton);
}
