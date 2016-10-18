angular.module('anatomyApp', [])
    .controller('BodyController', bodyController);

bodyController.$inject = ['$http'];

function bodyController($http) {
    var bCtrl = this;
    bCtrl.greeting = 'Speaking my body language';
}
