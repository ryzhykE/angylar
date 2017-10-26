var app = angular.module('myApp', []);

app.controller('validateCtrl', function($scope) {
  
    $scope.reset = function() {
       $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});


app.directive('username', function($q, $timeout) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

      ctrl.$asyncValidators.username = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          return $q.resolve();
        }
        var def = $q.defer();
        $timeout(function() {
          if (usernames.indexOf(modelValue) === -1) {
            def.resolve();
          } else {
            def.reject();
          }

        }, 2000);

        return def.promise;
      };
    }
  };
});