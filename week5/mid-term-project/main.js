/////////////////////////////////////////////////////////////////////////////////////
//////////////////////wger.de API Info for Exercise Generator////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

angular.module("Wünderbar-app",[])
    // .controller("health",healthController)
    .controller("recipe",recipeController)
    // .factory

    // healthController.$inject = ["$http","$sce"];
    recipeController.$inject = ["$http", "$sce"];

    // function healthController ($http, $sce){
    //     var hCtrl = this;
    //     hCtrl.testAPI = function () {
    //         console.info("healthController is loaded");
    //         $http.get("https://wger.de/api/v2/?language=2&"+hCtrl.searchTerm)
    //         .then(function (response){
    //             console.log("Response from API: ", response.data);
    //             hCtrl.healthData = response.data;
    //         });
    //     }
    // }

/////////////////////////////////////////////////////////////////////////////////////
//////////////////////Yumm.ly API Info for Recipe Generator////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

    function recipeController ($http, $sce){
        var rCtrl = this;
        rCtrl.searchTerm;
        rCtrl.loading=false;
        rCtrl.$sce = $sce;
        $.featherlight.defaults.loading="<img src='/a-loading.gif'></img>";
        rCtrl.testAPI = function () {
            console.info("recipeController is loaded");
            rCtrl.loading=true;
            $http.get("http://api.yummly.com/v1/api/recipes?_app_id=&_app_key=&q="+rCtrl.searchTerm+"&maxResult=10")
            .then(function (response){
                console.log("Response from API: ", response.data);
                rCtrl.recipeData = [];
                rCtrl.recipeData = response.data;

                for (var i=0; i < rCtrl.recipeData.matches.length; i++){
                    var id= rCtrl.recipeData.matches[i].id;
                    console.log("Recipe ID here " +id);
                    (function(i){
                        $http.get("http://api.yummly.com/v1/api/recipe/"+id+"?_app_id=813c62be&_app_key=363be200086a94534f517176a651f715")
                        .then(function (response){
                            console.log(response.data);
                            rCtrl.recipeData.matches[i].recipeURL= response.data.source.sourceRecipeUrl;
                            console.log(rCtrl.recipeData.matches[i].recipeURL)
                        });
                    })(i);
                    rCtrl.recipePageData = rCtrl.recipeData.matches.slice(0,10);
                    console.log("RECIPE PAGE DATA: ", rCtrl.recipePageData)
                    rCtrl.loading=false;

                }
            });

        }

        rCtrl.getPage = function(pageNum) {
            // update the rCtrl.recipePageData array to contain the slice corresponding to the page number
            // ex: page 1 is elements 0 through 10
            // page 2 is elements 10 through 20...

            rCtrl.recipePageData = rCtrl.recipeData.matches.slice(10*(pageNum-1),10*(pageNum-1)+10);

            console.log(rCtrl.recipeData);
        }

    }
