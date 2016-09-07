/////////////////////////////////////////////////////////////////////////////////////
//////////////////////wger.de API Info for Exercise Generator////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

angular.module("http-app",[])
    .controller("health",healthController)
    .controller("recipe",recipeController)
    // .factory

    healthController.$inject = ["$http","$sce"];
    recipeController.$inject = ["$http"];

    function healthController ($http, $sce){
        var hCtrl = this;
        hCtrl.$sce=$sce;
        hCtrl.testAPI = function () {
            console.info("healthController is loaded");
            $http.get("https://wger.de/api/v2/exercise?language=2&")
            .then(function (response){
                console.log("Response from API: ", response.data);
                hCtrl.healthData = response.data;
            });
        }
    }

/////////////////////////////////////////////////////////////////////////////////////
//////////////////////Food2Fork API Info for Recipe Generator////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

    function recipeController ($http){
        var rCtrl = this;
        rCtrl.searchTerm;

        rCtrl.testAPI = function () {
            console.info("recipeController is loaded");
            $http.get("http://api.yummly.com/v1/api/recipes?_app_id=813c62be&_app_key=363be200086a94534f517176a651f715&q="+rCtrl.searchTerm)
            .then(function (response){
                console.log("Response from API: ", response.data);
                rCtrl.recipeData = [];
                rCtrl.recipeData = response.data;
            });
        }
    }
