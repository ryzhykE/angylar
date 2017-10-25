var module = angular.module('app', []);

/**
module.service('ContactService', function () {
    //to create unique contact id
    var uid = 1;
    
    //contacts array to hold list of all contacts
    var contacts = [{
        id: 0,
        'name': 'Viral',
            'email': 'hello@gmail.com',
            'phone': '123-2343-44'
    }];
    
    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (contact) {
        if (contact.id == null) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }

    }

    //simply search contacts list for given id
    //and returns the contact object if found
    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }

    }
    
    //iterate through contacts list and delete 
    //contact if found
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }

    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }
});

module.controller('ContactController', function ($scope, ContactService) {

    $scope.contacts = ContactService.list();

    $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};
    }


    $scope.delete = function (id) {

        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }


    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
    }
})

//////

angular.
module('myServiceModule', []).
 controller('MyController', ['$scope', 'notify', function($scope, notify) {
   $scope.callNotify = function(msg) {
     notify(msg);
   };
 }]).
factory('notify', ['$window', function(win) {
   var msgs = [];
   return function(msg) {
     msgs.push(msg);
     if (msgs.length === 3) {
       win.alert(msgs.join('\n'));
       msgs = [];
     }
   };
 }]);


*/

.factory('addProducts', ['$window',function() {
	products = [];
	return {
		add: function(item) {
			products.push(item);
		},
		get: function() {
			return products;
		},
	};
 }])
 

.directive('myInput', function() {
	
	return {
		restrict: 'E',
		transclude: true,
		controller: ['$scope','addProducts',function MyController($scope, addProducts) {
				$scope.addItem = function(item) {
					addProducts.add(item);
					$scope.item = '';
				};
		}],
		
		template: '<p><input type="text" ng-model="item"><button ng-click="addItem(item);">Add</button></p>'
		
	};
})

.directive('list', function() {
	
	return {
		restrict: 'E',
		transclude: true,
		
		controller: ['$scope', 'addProducts', function MyController($scope, addProducts) {
			$scope.prod = addProducts.get();
		}],
		template: '<ul><li ng-repeat="item in prod track by $index">{{item}}</li></ul>'
		
	};
})