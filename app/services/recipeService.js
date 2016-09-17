angular.module("myApp")
    .service("recipeService", [function RecipeService() {
        this.getAllRecipes = function () {
            return [{
                id: 0,
                title: 'Recipe1',
                text: 'Lorem isume dolrem'
            }, {
                    id: 1,
                    title: 'Recipe2',
                    text: 'Lorem one more ipsum'
                }];
        }
    }]);