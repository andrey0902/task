
         App.factory('reviewsFactory',function ($http,$rootScope) {
             var service={},test;
                data = function () {
                    $http.get('./tpl/main/question/db.json').then(function (response) {
                     test= response.data;


                    })

                };

             data();


          var reviews=[{
                 "id" : "1",
                 "id_product" : "1",
                 "range" : "5",
                 "recall" : "best product",
                 "date" : "10-01-2017"
             },
                 {
                     "id" : "1",
                     "id_product" : "1",
                     "range" : "5",
                     "recall" : "best product",
                     "date" : "10-01-2017"
                 }];
            service.getReviews=function () {
                 return reviews;
             };
             service.getRecall=function(element){

                 console.log('data',''+element);
                 console.log('test',test);
              return _.filter(reviews,{ id_product : element });

             };
             console.log('factory');
             return service;
         });

