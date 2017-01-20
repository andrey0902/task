App.factory('goodsFactory',function ($http,$rootScope) {
    var service={},
        goods;
    function getGoods() {
        $http.get('./tpl/main/question/goods.json').then(function (response) {
            goods= response.data;
            $rootScope.$broadcast('goods:updated');
        })
    }
    getGoods();

    service.getGoods=function () {
        return goods;
    };
    service.getProduct=function(element){
        return _.find(goods,{ id : element });
    };

    return service;
});

