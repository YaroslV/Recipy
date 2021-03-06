angular.module('myApp')
    .component('recipes', {
        template: `<div>
    <ul>
        <li ng-repeat="recipe in $ctrl.recipes">
            <div>
                <a ui-sref="recipe({ recipeId: recipe.id})">{{recipe.title}}</a>
                <p>{{recipe.text}}</p>
            </div>
        </li>
    </ul>
</div>`,
        bindings: {
            recipes: '<'
        }
    })