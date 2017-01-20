 App.controller('goodsCtrl',function (goodsFactory,$rootScope) {
     var self=this;
     $rootScope.$on('goods:updated', function() {
         self.goods=goodsFactory.getGoods();
     });
     this.goods=goodsFactory.getGoods();
         this.preview=function(item){
         this.product=item;

     };
     this.data='';




});

