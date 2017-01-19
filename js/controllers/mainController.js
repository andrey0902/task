
         App.controller('goodsCtrl',function (goodsFactory) {

             this.goods=goodsFactory.getGoods();
             this.preview=function(item){
                 this.product=item;
                 console.log(this.product);
             };
             this.data='';
             console.log('sort',  this.data)
             console.log('goodsCtrl')



             });

