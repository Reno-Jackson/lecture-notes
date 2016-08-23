angular.module("monkey", []);

angular.module("monkey")
    .controller("gorilla", gorillaController);

function gorillaController () {
    this.h1 = false;
    this.div =false;
    this.chimp = function (){
        console.log("Magilla Gorilla");
        this.h1 =!this.h1;
    }
    this.orangutan = function(){
        this.div=!this.div;
    }
}
