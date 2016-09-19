module.angular("Countries",["$http"])
      .controller("countryController", country);

      function country($http){
          var cCtrl= this;

          cCtrl.getcountries = function(){
              console.log("Countries are loaded");
              $http.get("/countries")
                    .then(function(response){
                        cCtrl.countries= response.data
                    },function (err) {
                        console.log("Error Countries")
                    });
          };
      };
