/**
 * Created by javaBoxer on 3/23/2017.
 */

// affixes top nav to be sticky
$('#topnavbar').affix({
  offset: {
    top: $('#banner').height()
  }
});

// Assuming backend is writing the sale price strike through, we can toggle sale sticker in upper left of product.
// iterate over each product-wrapper and search for value of retail-price.
// if not empty, then it's on sale. Toggle Less class to display sale sticker in upper left of parent wrapper

$(document).ready(function(){

    $('.product-wrapper').each(function () {
        var retailValue = $(this).find('.retail-price');
        var retailValueText = $(retailValue).text();

        if(retailValueText) {
            $(this).find('.product-sale').addClass("sale-on");
        }

        else {
            $(this).find('.product-sale').addClass("sale-off");
        }
  })
    
    // Checkout Page - move the shopping cart section from the bottom of the page to the top
    // above "Account"
    
    var cartDetails = $(".checkout-details .cart-details");         // Remove Shopping Cart Div (cart-details)
    var checkoutAccount = $(".checkout-details .checkout-account"); // Insert Shopping Cart Div before Account Div (checkout-account)
    $(cartDetails).remove();
    $(cartDetails).insertBefore(checkoutAccount);
    
});


