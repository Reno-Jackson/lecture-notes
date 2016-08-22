// console.log(angular);

//  Angular has a number of different components
//  First 3
//          1. Module
//          2. Controller
//          3. Directive

// Module 
//       - Bucket for other components
//       - Modules are like containers in your application
//       - Top level of organization
//       - Good use case for multiple modules are large scale applications with mini-apps inside them
//       - In Angular, you MUST create at least ONE module

angular.module("SnackShack", []);
angular.module("SnackAttack", ['SnackShack']); // CREATE the Module (SETTER)
//  The array is called an INJECTOR
//  Dependency Injection - the way we access compoonents that we wouldn't normally have access to

angular.module("SnackAttack",[]) // RETRIEVE (GETTER)

// Controller
// - Live inside of modules, the are REGISTERED to a module
// - Deal with data / view
// - All controllers will have an object used to EXPOSE DATA TO THE VIEW
//      - ONLY things on this object will be accessible in HTML
angular
    .module("SnackAttack")
    .controller("cookieGram", cookieGramController);
    
cookieGramController.$inject = ["$scope"]; 
    
function cookieGramController ($scope) {
    //$scope is the object that exposes data to the view
    // If we want access to data in our HTML, it MUST be attached to $scope
    
    $scope.greeting = "Welcome to Snack Shack";
    
    $scope.snacks = "Snickers, Butterfingers, Crispy Squirrel bits";
}

