angular.module('myApp')
    .component('recipe', {
        template: `<div><h1>{{$ctrl.recipe.title}}</h1>
                    <p>{{$ctrl.recipe.text}}</p>
                    </div>
                    <div><button ng-click="$ctrl.editRecipe($ctrl.recipe.id)"></button></div>`,
        comtroller: function(){
            this.editRecipe = function(id){
                
            }
        }
    });