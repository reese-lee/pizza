// Business logic for pizza store
// function PizzaStore() {
//   this.pizzas = [];
//   this.currentPizza = -1
// }
//
// PizzaStore.prototype.addPizza = function(pizza) {
//   pizza.Id = this.assignId();
//   this.pizzas.push(pizza)
// }
//
// PizzaStore.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId
// }
//
// PizzaStore.prototype.findPizza = function(id) {
//   for(var i = 0, i < this.pizzas.length, i++) {
//     if (this.pizzas[i] {
//       if (this.pizzas[i].id == id) {
//         return this.pizzas[i];
//       }
//     }
//   };
//   return false;
// };
//
// PizzaStore.prototype.deletePizza = function(id) {
//   for(var i = 0, i < this.pizzas.length, i++) {
//     if (this.pizzas[i]) {
//       if (this.pizzas[i].id == id) {
//         delete this.pizzas[i];
//       }
//     }
//   };
//   return false;
// };

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

Pizza.prototype.getPrice = function() {
  if (this.size === "Petite") {
    this.price = 5;
    this.price += this.toppings.length;
  } else if (this.size === "In-Between") {
    this.price = 7;
    this.price += this.toppings.length;
  } else if (this.size === "Maximum") {
    this.price = 9;
    this.price += this.toppings.length;
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
    var sizeInput = $(parseInt("input:radio[name=size]:checked")).val();
    var toppingsInput = $(parseInt("input:radio[name=toppings]:checked")).val();
    // var crustInput = $(parseInt("input:radio[name=crust]:checked")).val();
    // var sauceInput = $(parseInt("input:radio[name=sauce]:checked")).val();
    var pizzaPrice = sizeInput + toppingsInput + crustInput + sauceInput;
    var pizzaMade = new Pizza(sauce, toppings, crust, size);
    pizzaMade.getPrice();
    console.log(pizzaMade);


  });
});
