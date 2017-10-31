angular.module('app')
.directive('iconBasket',function(){
	return {
		template: 'Count: {{itemsCount()}}',
		controller: function($scope, shopingCart){
			$scope.itemsCount = shopingCart.getItemsCount;
		}
	};
});