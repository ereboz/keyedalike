/**
 * Created by javaBoxer on 3/23/2017.
 */


$(document).ready(function(){
    
    //// affixes top nav to be sticky
    
    $(".wrapper-subnav").affix({
        offset: {
            top: $('#banner').height()
        }
    });
    
    $("#topnavbar").height($(".wrapper-subnav").height());
    
    // $('#topnavbar').affix({
    //     offset: {
    //         top: $('#banner').height()
    //     }
    // });

// Add Sale sticker to sale items
// Assuming backend is writing the sale price strike through, we can toggle sale sticker in upper left of product.
// iterate over each product-wrapper and search for value of retail-price.
// if not empty, then it's on sale. Toggle Less class to display sale sticker in upper left of parent wrapper
    
    $('.product-wrapper').each(function () {
        var salePrice = $(this).find('.sale-price');        // target to center price vertically if no retail price
        var retailValue = $(this).find('.retail-price');
        var retailValueText = $(retailValue).text();

        if(retailValueText) {
            $(this).find('.product-sale').addClass("sale-on");
        }

        else {
            $(this).find('.product-sale').addClass("sale-off");
            $(this).find(salePrice).addClass("saleOnly");       // no retail price, so center price vertically
        }
  })
    
    // Checkout Page - move the shopping cart section from the bottom of the page to the top
    // above "Account"
    
    var cartDetails = $(".checkout-details .cart-details");
    var checkoutAccount = $(".checkout-details .checkout-account");
    $(cartDetails).remove();
    $(cartDetails).insertBefore(checkoutAccount);
    
});

/**
 * Created by javaBoxer on 5/5/2017.
 */
// *************** BILL TO/SHIP TO ADDRESS FORM (from checkout page) ***************

// NEED TO MAKE THE ADD NEW SHIPPING, ADD NEW BILLING ADDRESS .container CLASS 50% WIDTH TO REDUCE THE SIZE AND CENTER IT ON SCREEN
// FOR DESKTOP > 800PX.
// IT DOES NOT HAVE A UNIQUE CLASS AND SETTING WIDTH ON .container AFFECTS EVERY PAGE ON THE SITE.
// READ IN THE URL AND APPLY STYLING ONLY TO THE ADDRESS PAGE for SHIPPING/BILLING(address/detail)
// APPLIES TO:
// http://a2zhardware.com/address/detail?makePrimary=True&addressType=Shipping&returnurl=%2Fcheckout
// http://a2zhardware.com/address/detail?makePrimary=True&addressType=Billing&returnurl=%2Fcheckout

$(window).load(function() {
    var loc = window.location.href.toLowerCase();
    var viewportWidth = $(window).width();
    var pageWrapper = "";
    
    if (loc.indexOf('/address/detail') > -1) {
        pageWrapper = $(".create-account-page");
        $(pageWrapper).addClass("addressMobileWidth");
        
        if (viewportWidth > 800) {
            $(pageWrapper).removeClass("addressMobileWidth").addClass("addressDesktopWidth");
        }
    
        $(window).resize(function () {
            var viewportWidth = $(window).width();
            if (viewportWidth < 800) {
                $(pageWrapper).removeClass("addressDesktopWidth").addClass("addressMobileWidth");
            }
            if (viewportWidth > 800) {
                $(pageWrapper).removeClass("addressMobileWidth").addClass("addressDesktopWidth");
            }
        });
    }
    
    // *************** CONTACT US PAGE ***************
    // Center the page with a left margin class when in Desktop view > 800px
    
    if (loc.indexOf('/contactus') > -1) {
        pageWrapper = $(".contact-us-page");
        $(pageWrapper).addClass("contactMobileWidth");
        
        if (viewportWidth > 800) {
            $(pageWrapper).removeClass("contactMobileWidth").addClass("contactDesktopWidth");
        }
        
        $(window).resize(function () {
            var viewportWidth = $(window).width();
            if (viewportWidth < 800) {
                $(pageWrapper).removeClass("contactDesktopWidth").addClass("contactMobileWidth");
            }
            if (viewportWidth > 800) {
                $(pageWrapper).removeClass("contactMobileWidth").addClass("contactDesktopWidth");
            }
        });
        
        // Replace all occurrences of (required) to *
    
        $('.form-label-suffix-required').each(function() {
            var txt = $(this).html();
            txt = txt.replace('(required)','*');
            $(this).html(txt);
        });
        
    }
    
});

