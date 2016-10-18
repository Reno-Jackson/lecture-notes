// Angular Modules for Hearthstone application API
//'ngRoute'
angular.module('HearthstoneApp', [])
    .controller('CardController', deckController)

deckController.$inject = ['$http']

function deckController($http) {
    var deckCtrl = this;
    deckCtrl.greeting = 'You fell into my trap card';
    $http({
        method: 'GET',
        url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards',
        dataType: 'json',
        headers: {
            'X-Mashape-Authorization': 'Abo32BbDXemshGzTJKDRwOUZXW1tp1ah6CQjsn918PdhKRYRIB'
        }
    }).then(function(res, status) {
        console.log('Success:', res);
        deckCtrl.getCards = res;
    }, function (res, status) {
        console.log ('Error:', status);
    })
};


// var app = angular.module("myApp", ["ngRoute"]);
// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl : "main.htm"
//     })
//     .when("/red", {
//         templateUrl : "red.htm"
//     })
//     .when("/green", {
//         templateUrl : "green.htm"
//     })
//     .when("/blue", {
//         templateUrl : "blue.htm"
//     });
// });
