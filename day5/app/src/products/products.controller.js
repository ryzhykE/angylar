function productsController($scope,shopingCart,$stateParams){
	$scope.getProducts = function(){
		return shopingCart.getItems();
	}
}