(function() {
    'use strict';

     angular 
          .module('app')
          .controller('MainController', MainController);

          MainController.$inject = ['mainfactory', 'toastr']; //installation of toastr inject.


       /* @ngInject */   //installation of toastr
       function MainController(mainfactory, toastr) {
           var vm = this;
           vm.title = 'MainController';

           activate();

           ////////////////

            function activate() {

                    getTopSpots();
        }

         function getTopSpots() {
           mainfactory.getTopSpots().then(
                function(response)  {
                 vm.topspots = response.data; 
                 toastr.success("topspots loaded successfully");  //success test for toastr.
                },
                function(error){
                      toastr.error(error);

                }

             )
         }
     }
 })();


 
