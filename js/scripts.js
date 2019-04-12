// Business logic for pizza store
function PizzaStore() {
  this.pizzas = [];
  this.currentPizza = -1
}

PizzaStore.prototype.addPizza = function(pizza) {
  pizza.Id = this.assignId();
  this.pizzas.push(push)
}

PizzaStore.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId
}

PizzaStore.prototype.findPizza = function(id) {
  for(var i = 0, i < this.pizzas.length, i++) {
    if (this.pizzas[i] {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
};

PizzaStore.prototype.deletePizza = function(id) {
  for(var i = 0, i < this.pizzas.length, i++) {
    if (this.pizzas[i] {
      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
      }
    }
  };
  return false;
};

// Business logic for Pizza
function Pizza(size, toppings, crust) {
  this.sauce = [];
  this.toppings = [];
  this.crust = [];
  this.size = []
}

Pizza.prototype.toppingsValue = function() {
  var baseToppingsValue = 1
  if 
}

Pizza.prototype.getPrice = function() {
  var pizzaPrice = 8
  if(this.topping
}



// User interface logic
