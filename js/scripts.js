
var cart = [];





//event.preventDefault();

$(document).ready(function() {

  $(".add-game").click(function() {
    cart.push($(this).attr("value"));  //push game to cart



    // for(let i=0; i<cart.length; ++i) {
    //   console.log(cart[i]);
    // }

  });

  $(".remove-game").click(function() {
    let game = $(this).attr("value");

    for(let i=0; i<cart.length; ++i) {
      if(game === cart[i]) {
        cart.splice(i, 1);
      }
    }
    //  for(let i=0; i<cart.length; ++i) {
    //    console.log(cart[i]);
    // }

  });

  $(".submit").click(function() {
    $("#shopping").hide();
    $("#checkout").show();
    cart.sort();
    $("#checkoutPrintout").text("Your games are: " + cart.join(", "));
  });

});
