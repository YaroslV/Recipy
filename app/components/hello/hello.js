angular.module("myApp")
    .component("hello",{
        template:'<div><span ng-click="$ctrl.toogleGreeting()">{{$ctrl.greeting}}</span></div>',
        controller: function(){
            this.greeting = 'Welcome to Recipes website';
            this.toogleGreeting = function(){
                this.greeting = this.greeting == 'Have a nice day!' ? 'Welcome to Recipes website' : 'Have a nice day!';
            } 
        }                    
    });