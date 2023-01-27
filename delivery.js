
    // Create an empty cart array
    let cart = [];

    let total = 0;

    function addToCart(item, price) {
      // Add the item to the cart array
      cart.push(item);
      // Add the price to the total
      total += parseInt(price);
    
      // Create a new list item element for the item
      let itemElement = document.createElement("p");
      //itemElement.innerText = item + "     $"+price;
      itemElement.innerHTML = `<p>${item}</p>  <p>$${price}</p>`;
    
      // Add the item element to the cart list
      document.getElementById("cart").appendChild(itemElement);
    
      // Update the total cost display
      document.getElementById("total").innerText = "Total: $" + total;
    }
    
    // Add an event listener to each add button
    document.getElementById("add-item-1").addEventListener("click", function() {
      let item = document.getElementById("item-1").innerText;
      let price = document.getElementById("price-1").innerText;
      addToCart(item,price);
    });
    
    document.getElementById("add-item-2").addEventListener("click", function() {
      let item = document.getElementById("item-2").innerText;
      let price = document.getElementById("price-2").innerText;
      addToCart(item,price);
    });
    
    document.getElementById("add-item-3").addEventListener("click", function() {
      let item = document.getElementById("item-3").innerText;
      let price = document.getElementById("price-3").innerText;
      addToCart(item,price);
    });
    
    document.getElementById("add-item-4").addEventListener("click", function() {
      let item = document.getElementById("item-4").innerText;
      let price = document.getElementById("price-4").innerText;
      addToCart(item,price);
    });
    
    document.getElementById("add-item-5").addEventListener("click", function() {
      let item = document.getElementById("item-5").innerText;
      let price = document.getElementById("price-5").innerText;
      addToCart(item,price);
    });
    
    document.getElementById("add-item-6").addEventListener("click", function() {
        let item = document.getElementById("item-6").innerText;
        let price = document.getElementById("price-6").innerText;
        addToCart(item, price);
      });
      