    angular.module("Magic Mike", [])
    .controller("Card", cardController)
    .controller("Gallery", galleryController)
    .factory("nerdBinder",binderFactory);

    function cardController (nerdBinder) {
        console.info("I can taste the mana", nerdBinder.cardBinder)
        var cCtrl = this;

        cCtrl.newCard = function(){
            console.log("Test Card");
            cCtrl.cardlist.push(cCtrl.card);
            cCtrl.card = {};

        }
        cCtrl.cardlist= nerdBinder.cardBinder;
    }

    function galleryController(nerdBinder) {
        var gCtrl =this;

        gCtrl.cardlist=nerdBinder.cardBinder

        // function colortransform () {
        //     if (Ctrl.card.manaColor === "dimgray")
        //     console.log("Black Mana")
        //     return "Black Mana"
        // }

    }


function binderFactory() {
    console.info("binder working")

        var cardBinder = [];

    return {
         cardBinder: cardBinder
    }
}
