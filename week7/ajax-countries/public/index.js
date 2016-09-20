angular.module("Countries",[])
      .controller("countryController", country);

      country.$inject=["$http"]

      function country($http){
          var cCtrl= this;

          cCtrl.getcountries = function(){
              console.log("Countries are loaded");
              $http.get("/countries")
                    .then(function(response){
                        cCtrl.countries= response.data
                        console.log("countries are present", response.data)
                    },function (err) {
                        console.log("Error Countries")
                    });
          };
      };
