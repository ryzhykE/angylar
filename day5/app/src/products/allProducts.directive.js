angular.module('app')
.directive('allProducts',function(){
	return {
		templateUrl: './src/products/allProducts.html',
		controller: function($scope, shopingCart){
			$scope.product = shopingCart.getAllProducts();
		}
	};
});