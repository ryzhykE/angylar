angular.module('app')
.config(function($stateProvider){

var productsState = {
	name:'products',
	url:'/products',
	component:'products'
	};
	
$stateProvider.state(productsState);

var productState = {
	name:'product',
	url:'/product/:id',
	component:'product'
	};

$stateProvider.state(productState);

var cartState = {
	name:'cart',
	url:'/cart',
	component:'cart'
	};

$stateProvider.state(cartState);

var checkoutState = {
	name:'checkout',
	url:'/checkout',
	component:'checkout'
	};

$stateProvider.state(checkoutState);
});