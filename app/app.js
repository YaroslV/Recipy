'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $stateProvider) {
  $locationProvider.hashPrefix('!');
  
  var view1 = {
    
  };
  
  var view2 = {
    
  };

  $stateProvider.state(view1);
  $stateProvider.state(view2);
  
}]);
