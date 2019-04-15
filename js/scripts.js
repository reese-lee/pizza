// Business logic for Pizza
function Pizza(toppings, size, crust, sauce) {
  this.toppings = toppings;
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
}

Pizza.prototype.getPrice = function() {
  var price = 0;
  if(this.size === "Petite") {
    price += 8;
  } else if (this.size === "In-Between") {
    price += 12;
  } else if (this.size === "Maximum") {
    price += 16;
  }
  for (var i=0; i <= this.toppings.length -1; i++) {
    if(this.toppings.length === 1) {
      price +=2;
    } else if (this.toppings.length === 2) {
      price += 4;
    } else if (this.toppings.length === 3) {
      price += 6;
    } else if (this.toppings.length === 4) {
      price += 8;
    } else if (this.toppings.length === 5) {
      price += 10;
    } else {
      price += 12;
    }
  return this.cost = price;
  };
};

$(function() {
  $("form#pizzaSelections").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=sizeInput]:checked").val();
    var sauce = $("input:radio[name=sauceBase]:checked").val();
    var crust = $("input:radio[name=crustOptions]:checked").val();
    var toppings = [];
    var pizzaMade = new Pizza(toppings, size, crust, sauce);
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppings.push($(this).val());
    });
    pizzaMade.getPrice();
    var price = pizzaMade.cost;
    $(".results").show();
    $("form#pizzaSelections").hide();
    $("#sizeSelected").text(pizzaMade.size);
    $("#priceOfSelected").text(price);
    $("#sauceSelected").text(sauce);
    $("#crustSelected").text(crust);
    $("#toppingsSelected").text(toppings);
  });
  $("#orderAgain").click(function(event) {
    event.preventDefault();
    $("form#pizzaSelections").show();
    $(".results").hide();
  });
});
