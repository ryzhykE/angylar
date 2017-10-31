function productController($scope,$stateParams,shopingCart){
	$scope.id = $stateParams.id;
	$scope.addToCart = function(){
		shopingCart.addToCart($scope.id);
	}
}