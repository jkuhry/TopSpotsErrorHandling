   angular
      .module('app')
      .factory('mainfactory', mainfactory);

      mainfactory.$inject = ['$http', '$q']; //inject of $q.

    /* @ngInject */
    function mainfactory($http,$q) {
        var service = {
            getTopSpots: getTopSpots
        };
        return service;

        ////////////////

        function getTopSpots() {
          var defer = $q.defer();
        	  $http({
               method: 'GET',
               url: 'app/topspots.json'
               }).then(function(response) {

               	     defer.resolve(response);
              },

              function(error){

                 defer.reject(error);  //error handling for reject and defer promise.

        });
               return defer.promise;
    }
};