angular.module('app')
.directive('productDirective',function(){
	return {
		template: '<p>Id: {{id}}</p><p>Name: {{name}}</p><p>Detail: {{description}}</p>Price: {{price}}</p>',
		scope:{
			productId:'='
		},
		controller: function($scope,shopingCart){
			var obj = shopingCart.getProductById($scope.productId)
			$scope.name = obj.name;
			$scope.id = obj.id;
			$scope.description = obj.description;	
			$scope.price = obj.price;	
		}
	};
});