function checkoutController($scope,shopingCart,$stateParams){
	$scope.checkout = function(){
		shopingCart.checkout();
	}
}