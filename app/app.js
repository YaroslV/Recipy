'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router'])
  .config(['$stateProvider', function ($stateProvider) {
    var view1 = {
      name: "recipes",
      url: "/recipes",
      component: "recipes",
      resolve: {
        recipes: function (recipeService) {
          return recipeService.getAllRecipes();
        }
      }
    };

    var view2 = {
      name: "addRecipe",
      url: "/addRecipe",
      template: "<p>This is the partial for view 2.</p>"
    };

    var view3 = {
      name: "hello",
      url: "/hello",
      component: "hello"
    }

    var view4 = {
      name: "recipe",
      url: "/recipe/{recipeId}",
      component: "recipe",
      resolve: {
        recipe: function(recipeService, $transition$){
          return recipeService.getRecipe($transition$.params().recipeId);
        }
      }
    }

    $stateProvider.state(view1);
    $stateProvider.state(view2);
    $stateProvider.state(view3);
    $stateProvider.state(view4);
  }]);
