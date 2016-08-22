angular.module('SuperHeroes', []).controller('TheAvengers', avengersController);

function avengersController() {
    var avengers = this;

    avengers.title = "Every team needs a Captain!";
    
    avengers.heroes = ['Captain America', 'Jethro', 'Iron Man', 'Gumby'];
    
    avengers.newAvenger = "";
    
    function addNewHero(){
        avengers.heroes.push(avengers.newAvenger);
    }
    
    avengers.addNewHero = addNewHero;
}
