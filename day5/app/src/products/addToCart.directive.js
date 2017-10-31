angular.module('app')
.directive('addToCart',function(){
	return {
		template: '<buuton></buuton>',
		controller: function($scope, shopingCart){
			$scope.product = shopingCart.getAllPoducts();
		}
	};
});