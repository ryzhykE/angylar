var myApp = angular.module('hello', ['ui.router']);

myApp.config(function($stateProvider) {
  // An array of state definitions
  var states = [
    { name: 'about', url: '/about', component: 'about' },
    
    { 
      name: 'tovar', 
      url: '/tovar', 
      component: 'tovar',
      resolve: {
        tovar: function(TovarService) {
          return TovarService.getAllTovar();
        }
      }
    },
    
    { 
      name: 'tovar.item', 
      url: '/{itemId}', 
      component: 'item',
      resolve: {
        item: function(tovar, $stateParams) {
          return tovar.find(function(item) { 
            return item.id === $stateParams.itemId;
          });
        }
      }
    }
  ]
  
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});

