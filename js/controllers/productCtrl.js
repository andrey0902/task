App.controller('productCtrl',function (goodsFactory,reviewsFactory,$location) {


        var part=$location.path();
        part=+part.split('/')[2];
        this.product = goodsFactory.getProduct(part);
        this.reviews=reviewsFactory.getRecall(""+part);
        this.minValue=3;
        this.maxlength=200;
        this.access= undefined;

        !function () {
            $('#my-tabs a').click(function (e) {
                e.preventDefault();
                $(this).tab('show')
            });
        }();
    $(function(){
        $('#rating_1').rating({
            fx: 'full',
            image: 'img/stars.png',
            loader: 'img/ajax-loader.gif',
            url: '',
            callback: function(responce){

                this.vote_success.fadeOut(2000);
            }
        });});
        this.inquiry=function (data,isValid) {
            if(this.access!==undefined){
                if(isValid){
                    // send data
                }
            }else{
                this.showError=true;
            }
        };
        this.getError=function (error) {
            if(angular.isDefined(error)) {
                if (error.required) {
                    return 'The field must not be empty';
                }
                if (error.minlength) {
                    return 'The field must contain at least 3 characters';
                }
                if (error.maxlength) {
                    return 'The field should contain a maximum of 10 characters';
                }
                if(this.access==undefined){
                    return 'please login at the website'
                }
            }
        };


    console.log('productCtrl')



});

