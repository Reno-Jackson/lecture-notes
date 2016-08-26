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

        function colortransform (card) {
            if (card.manaColor === "dimgray")
            return "Black Mana"

            else if(card.manaColor === "peachpuff")
            return "White Mana"

            else if(card.manaColor === "dodgerblue")
            return "Blue Mana"

            else if(card.manaColor === "dodgerblue")
            return "Blue Mana"

            else if(card.manaColor === "crimson")
            return "Red Mana"

            else(card.ManaColor === "forestgreen")
            return "Green Mana"

        }
        gCtrl.colortransform=colortransform;


    }


function binderFactory() {
    console.info("binder working")

        var cardBinder = [];

    return {
         cardBinder: cardBinder
    }
}
