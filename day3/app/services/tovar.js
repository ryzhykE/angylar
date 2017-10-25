angular.module('hello').service('TovarService', function($http) {
  var service = {
    getAllTovar: function() {
      return $http.get('data/tovar.json', { cache: true }).then(function(resp) {
        return resp.data;
      });
    },
  }
  
  return service;
})