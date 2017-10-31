angular.module('app')
.factory('shopingCart', function(){
    var items = [];
    var products = [
        {
            id: '1',
            name: 'Product1',
            description: 'about product 1',
            price: '100'
        },
        {
            id: '2',
            name: 'Product2',
            description: 'about product 2',
            price: '200'
        },
        {
            id: '3',
            name: 'Product3',
            description: 'about product 3',
            price: '300'
        },
        {
            id: '4',
            name: 'Product4',
            description: 'about product 4',
            price: '400'
        },
        {
            id: '5',
            name: 'Product5',
            description: 'about product 5',
            price: '500'
        },
    ];
    return{
        getItems: function(){
            return items;
        },
        getItemsCount: function(){
            return items.length;
        },
        getAllProducts: function(){
            return products; 
        },
		getProductById: function(id){
			var obj;

			for(product in products){
				if(products[product].id == id){
					obj = products[product];
				}
			}
			return obj
		},
		addToCart: function(id){
			for(obj in products){
				if(products[obj].id == id){
					items.push(products[obj]);		
				}
			}
			
		},
		checkout: function(){
			items = [];
		}
    };
})