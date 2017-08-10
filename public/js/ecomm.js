
const shopClient = ShopifyBuy.buildClient({
	accessToken: '47cd90f4fdeef95919cc60f22904f86d',
	appId: '6',
	domain: 'domeha.myshopify.com'
});

var cart;
shopClient.createCart().then(function (newCart) {
  cart = newCart;
});
	

jQuery('#siren').on('click', function() {
shopClient.fetchProduct('8659611270')
  .then(function (product) {
	  var variantObj = product.variants[0]; 
	  cart.createLineItemsFromVariants({variant: variantObj, quantity: 1}).then(newcart => {
		  console.log(newcart)
		  newcart = newcart.attrs.line_items.map(function(item){
			  return {
				  name: item.title,
				  quantity: item.quantity,
				  price: item.quantity * item.price,
				  picture: item.image.src
			  }
		  })
      localStorage.setItem('domeCart', JSON.stringify(newcart));
		  console.log("itemset")
		  updateCart();
      $('.empty').css('display', 'none');
      $('.top-cart-item-image').css('display', 'block');
	  })
  })
});

var updateCart = function() {
	var cart = localStorage.getItem('domeCart')
	shopCart = JSON.parse(cart)
       if (cart.length != 0) {     
          cart = {
            cart: shopCart,
          }

        ko.cleanNode(cart);
        ko.applyBindings(cart)
	   }
}
