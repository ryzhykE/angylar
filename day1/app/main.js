var myApp = angular.module('app', []);
var app = angular.module("app")
app.controller('SettingsController1', SettingsController1)
function SettingsController1($scope){
    this.name = 'John Bon'
    $scope.name = 'Vasya'
    
    var self = this
    self.names = []
    self.addName = function(name){
        self.names.push(name)
    }
}

app.controller('SettingsController2', SettingsController2)
function SettingsController2($scope)
{

}