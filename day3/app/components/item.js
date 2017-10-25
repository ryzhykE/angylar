angular.module('hello').component('item', {
  bindings: { item: '<' },
  template: '<h3>A item!</h3>' +
  
            '<div>Name: {{$ctrl.item.name}}</div>' +
            '<div>Id: {{$ctrl.item.id}}</div>' +           
            '<button ui-sref="tovar">Close</button>'
});