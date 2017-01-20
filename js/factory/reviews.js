App.factory('reviewsFactory',function ($http,$rootScope) {
    var service={},reviews;
    var getData = function () {
        $http.get('./tpl/main/question/reviews.json').then(function (response) {
            reviews= response.data;
            $rootScope.$broadcast('reviews:updated');
        })
    };
    getData();

    service.getRecall=function(element){
        return _.filter(reviews,{ id_product : element });
    };
    return service;
});

