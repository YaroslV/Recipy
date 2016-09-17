'use strict';

angular.module('myApp.view1', [])
.controller('AllRecipesCtrl', [function() {
  this.model = {};
  this.model.recipes = [];
}]);