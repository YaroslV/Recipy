angular.module("myApp")
    .service("recipeService", [function RecipeService() {
        var stubData = [{
                id: 0,
                title: 'Recipe1',
                text: 'Lorem isume dolrem'
            }, {
                    id: 1,
                    title: 'Recipe2',
                    text: 'Lorem one more ipsum'
                }];
        this.getAllRecipes = function () {
            return stubData;
        };

        this.getRecipe = function(id){
            var returnObj;
            var parsedId = parseInt(id);
            angular.forEach(stubData, function(k, v, obj){
                if(k.id == parsedId ){
                    returnObj = { id: k.id, title: k.title, text: k.text};
                }
            });       
            return returnObj;
        };
    }]);