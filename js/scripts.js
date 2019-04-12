// Business logic for Pizza
function Pizza(toppings, size, price) {
  // this.sauce = [];
  this.toppings = [];
  // this.crust = [];
  this.size = size;
  this.price = price
}

// Pizza.prototype.addSauce = function(sauce) {
//   this.sauce.push(sauce);
// }

Pizza.prototype.addToppings = function(toppings) {
  this.toppings.push(toppingSelected);
}

// Pizza.prototype.addCrust = function(crust) {
//   this.crust.push(crust);
// }

Pizza.prototype.addSize = function(size) {
  this.size = sizeSelected;
}

Pizza.prototype.getPrice = function(price) {
  if (this.size === "Petite") {
    this.price = 8;
    this.price += this.toppings.length;
  } else if (this.size === "In-Between") {
    this.price = 10;
    this.price += this.toppings.length + 2;
  } else if (this.size === "Maximum") {
    this.price = 12;
    this.price += this.toppings.length + 4;
  } return this.price;
};

// function showPizza() {
//   var selectedPizza = PizzaStore.findPizza(pizza);
//   $("#selectedSize").html(pizza.size);
//   $("#selectedCrust").html(pizza.crust);
//   $("#selectedTopping").html(pizza.topping);
//   $("#selectedSauce"),html(pizza.sauce)
// }

// User interface logic
$(function() {
  $("form#pizzaSelections").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("input:radio[name=size]:checked").val();
    var toppingsInput = $.each($("input:checkbox[name=toppings]:checked"), function () {
      toppings.push($(this).val());
    });
    // var crustInput = $(parseInt("input:radio[name=crust]:checked")).val();
    // var sauceInput = $(parseInt("input:radio[name=sauce]:checked")).val();
    // var pizzaPrice = sizeInput + toppingsInput + crustInput + sauceInput;
    // var pizzaMade = new Pizza(toppings, size, price);
    // pizzaMade.getPrice();
    // console.log(pizzaMade);
    console.log(toppingsInput);


  });
});
