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
function Pizza(sauce, toppings, crust, size) {
  this.sauce = [];
  this.toppings = [];
  this.crust = [];
  this.size = []
}

Pizza.prototype.sauceValue = function(sauce) {
  var baseSauceValue = 1
  if(this.sauce === 1) {
    baseToppingsValue +=1;
  } else if (this.sauce === 2) {
    baseToppingsValue +=2;
  } else if (this.sauce === 3) {
    baseToppingsValue +=3;
  } else {
    alert("Please pick a scrumptious sauce for for that extra sugar coating!");
  }
}

Pizza.prototype.toppingsValue = function(topping) {
  var baseToppingsValue = 1
  if(this.toppings === 1) {
    baseToppingsValue +=1;
  } else if (this.toppings === 2) {
    baseToppingsValue +=2;
  } else if (this.toppings === 3) {
    baseToppingsValue +=3;
  } else {
    alert("Please pick a delicious topping for maximum sugar rush!");
  }
}

Pizza.prototype.crustValue = function(crust) {
  var baseCrustValue = 1
  if (this.crust === 1) {
    baseCrustValue += 1;
  } else if (this.crust === 2) {
    baseCrustValue += 2;
  } else if (this.crust === 3) {
    baseCrustValue += 3;
  } else {
    alert("Are you crazy?! Choose a crust!");
  }
}

Pizza.prototype.sizeValue = function(size) {
  var baseSizeValue = 1
  if (this.size === 1) {
    baseCrustValue += 1;
  } else if (this.size === 2) {
    baseCrustValue += 2;
  } else if (this.size === 3) {
    baseCrustValue += 3;
  } else {
    alert("Eating for one? Eating for 5? We won't judge; just choose.");
  }
}

Pizza.prototype.getPrice = function() {
  var pizzaPrice = 5
  var baseOfAll = (baseSizeValue + baseCrustValue + baseSauceValue + baseToppingsValue)
  if(baseOfAll <= 4) {
    pizzaPrice +=4;
  } else if (baseOfAll >=5 && baseOfAll <=8) {
    pizzaPrice +=6;
  } else if (baseOfAll >=9) {
    pizzaPrice +=8;
  };
};



// User interface logic
$(function() {
  var sizeInput =
  var toppingsInput =

})
