/////////////// Intro to Angular Part.1///////////
//////////////////////////////////////////////////

angular.module('introAngular',[])
    .controller('appController', appController);


///////////Button 1 & 2 function/////////////////////////////

function appController(){
    var aCtrl = this;
    aCtrl.h1 = false;
    aCtrl.buttonOne = function(){
        console.log("Why you Click Button?");
        aCtrl.h1=!aCtrl.h1;
    }
    aCtrl.ul = false;
    aCtrl.buttonTwo = function(){
        aCtrl.ul=!aCtrl.ul;
    }
}

///////////////////// Part 2/////////////////////////////////

 function(){
    var aCtrl = this;
    aCtrl.parag = false;
    aCtrl.
    

}
