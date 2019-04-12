// Business logic for Pizza
function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.addToppings = function(toppings) {
  this.toppings.push(toppings);
}

Pizza.prototype.addSize = function(size) {
  this.size = sizeSelected;
}

Pizza.prototype.getPrice = function(price) {
  if (this.size === "Petite") {
    if (this.toppings === "gummy" || this.toppings === "choc" || this.toppings === "charms") {
    this.price = 8;
    } else if ((this.toppings === "gummy" && this.toppings === "choc") || (this.toppings === "gummy" && this.toppings === "charms") || (this.toppings === "choc" && this.toppings ==="charms")) {
      this.price = 8;
      this.price +=4;
    } else {
      this.price = 8;
      this.price +=8;
    }
  return this.price;
  if (this.size === "In-Between") {
    if (this.toppings === "gummy" || this.toppings === "choc" || this.toppings === "charms")
    this.price = 10;
    } else if ((this.toppings === "gummy" && this.toppings === "choc") || (this.toppings === "gummy" && this.toppings === "charms") || (this.toppings === "choc" && this.toppings ==="charms")) {
      this.price = 10
      this.price +=4;
    } else {
      this.price = 10
      this.price +=8;
    }
  return this.price;
  if (this.size === "Maximum") {
    if (this.toppings === "gummy" || this.toppings === "choc" || this.toppings === "charms")
    this.price = 12;
    } else if ((this.toppings === "gummy" && this.toppings === "choc") || (this.toppings === "gummy" && this.toppings === "charms") || (this.toppings === "choc" && this.toppings ==="charms")) {
      this.price = 12
      this.price +=4;
    } else {
      this.price = 12
      this.price +=8;
    }
  };
  return this.price;
};

// User interface logic
$(function() {
  $("form#pizzaSelections").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("input:radio[name=size]:checked").val();
    var toppings = $.each($("input:checkbox[name=toppings]:checked"), function() {
      toppings.push($(this).val());
    });
    // var crustInput = $(parseInt("input:radio[name=crust]:checked")).val();
    // var sauceInput = $(parseInt("input:radio[name=sauce]:checked")).val();
    // var pizzaPrice = sizeInput + toppingsInput + crustInput + sauceInput;
    // var pizzaMade = new Pizza(toppings, size, price);
    // pizzaMade.getPrice();
    // console.log(pizzaMade);
    var pizzaMade = new Pizza(toppings, size, price);
    var price = pizzaMade.getPrice();
    console.log(pizzaMade);
    console.log(price);


  });
});
