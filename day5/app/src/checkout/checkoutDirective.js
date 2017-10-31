angular.module('app')
.directive('checkoutDirective',function(){
	return {
		template: '<p ng-repeat="obj in items track by $index">{{obj.name}} : {{obj.price}}</p>',
		controller: function($scope, shopingCart){
			$scope.items = shopingCart.getItems();
			console.log($scope.items);
		}
	};
});