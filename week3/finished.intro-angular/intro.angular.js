/////////////// Intro to Angular Part.1///////////
//////////////////////////////////////////////////

angular.module('introAngular', [])
    .controller('appController', appController);


///////////Button 1 & 2 function/////////////////////////////

function appController() {
    var aCtrl = this;
    aCtrl.h1 = false;

    aCtrl.buttonOne = function() {
        console.log("Why you Click Button?");
        aCtrl.h1 = !aCtrl.h1;
    }
    aCtrl.ul = false;
    aCtrl.buttonTwo = function() {
        aCtrl.ul = !aCtrl.ul;
    }

    aCtrl.style = {};
    aCtrl.turnPink = function() {
        aCtrl.style.color = 'pink';
    }
    aCtrl.confirmNavigation = function() {
        var cancel = confirm('Confirm Navigation away from current page?');
        if (!cancel) {
            event.preventDefault();
        }
    };
}
