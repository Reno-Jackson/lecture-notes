// Angular Modules for Hearthstone application API

angular.module('HearthstoneApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/hero/:class", {
                templateUrl: "./html/hero.html",

            })
            .when('/', {
                templateUrl: './html/home.html'
            })
            // .when('/classes', {
            //     templateUrl: './html/classes.html'
            // })
            // .when("/red", {
            //     templateUrl : "red.htm"
            // })
            // .when("/green", {
            //     templateUrl : "green.htm"
            // })
            // .when("/blue", {
            //     templateUrl : "blue.htm"
            // });
    });

angular.module('HearthstoneApp')
    .controller('CardController', deckController)

deckController.$inject = ['$http', '$routeParams'];

function deckController($http, $routeParams) {
    var deckCtrl = this;
    deckCtrl.greeting = 'You fell into my trap card';
    console.log("Class: ", $routeParams);

    deckCtrl.grabCards = function(charClass) {
        console.log("Class chosen: ", charClass);
        $http({
            method: 'GET',
            url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/' + charClass,
            dataType: 'json',
            headers: {
                'X-Mashape-Authorization': 'Abo32BbDXemshGzTJKDRwOUZXW1tp1ah6CQjsn918PdhKRYRIB'
            }
        }).then(function(res, status) {
            console.log('Success:', res);
            deckCtrl.getCards = res.data;
            console.log(res.data);

        }, function(err) {
            console.log('Error:', err);
        })
        window.location.href = '#/hero/' + charClass;
    }
}
