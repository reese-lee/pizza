// Business logic for Pizza
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.getPrice = function(price) {
  var toppings = [];
  $.each($("input:checkbox[name=toppings]:checked"),
  function() {
    toppings.push($(this).val());
  });
  if (this.size === "Petite" && this.toppings.length ===1) {
    this.price = 8;
    } else if (this.size === "Petite" && this.toppings.length ===2) {
        this.price = 8;
        this.price +=4;
    } else if (this.size === "Petite" && this.toppings.length ===3) {
        this.price = 8;
        this.price +=8;
    } else if (this.size === "In-Between" && this.toppings.length ===1) {
        this.price = 10;
        this.price +=4;
    } else if (this.size === "In-Between" && this.toppings.length ===2) {
        this.price = 10;
        this.price +=6;
    } else if (this.size === "In-Between" && this.toppings.length ===3) {
        this.price = 10;
        this.price +=8;
    } else if (this.size === "Maximum" && this.toppings.length ===1) {
        this.price = 16;
    } else if (this.size === "Maximum" && this.toppings.length ===2) {
        this.price = 16;
        this.price +=6;
    } else if (this.size === "Maximum" && this.toppings.length ===3) {
        this.price = 16;
        this.price +=8;
    } else {
      alert("Please make your delicious selections! (Be sure to select both a size and at least one topping.)")
    }
  return this.price;
};

// User interface logic
$(function() {
  $("form#pizzaSelections").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=sizeInput]:checked").val();
    var toppings = [];
    $.each($("input:checkbox[name=toppings]:checked"),
    function() {
      toppings.push($(this).val());
    });
    var pizzaMade = new Pizza(toppings, size);
    var price = pizzaMade.getPrice();
    console.log(pizzaMade);
    console.log(price);
    $(".results").show();
    $("#sizeSelected").text(pizzaMade.size);
    $("#toppingsSelected").text(pizzaMade.toppings);
    $("#priceOfSelected").text(pizzaMade.price);


  });
});
