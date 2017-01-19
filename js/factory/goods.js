
         App.factory('goodsFactory',function () {
             var service={};
             var goods=[{id:1,
                 category:'tabs',
                 title:'Samsung Galaxy Tab',
                 img:{
                    img_0:'./img/samsung.gif',
                    img_1:'./img/s1.jpeg',
                    img_2:'./img/s2.jpeg',
                    img_3:'./img/s.jpeg'
             },
                 text:' <b>About this item</b></br> Important Made in USA Origin Disclaimer: For certain items sold by Walmart on Walmart.com, the displayed country of origin information may not be accurate or consistent with manufacturer information. For updated, accurate country of origin data, it is recommended that you rely on product packaging or manufacturer information.',
                 description:'Samsung Galaxy Tab E Lite 7.0" 8GB White Wi-Fi SM-T113NDWAXAR'
             },
                 {id:2,
                 category:'tabs',
                 title:'Samsung Galaxy Tab A 9.7',
                 img:{
                    img_0:'./img/sA9.7.jpeg',
                    img_1:'./img/sA9.7_1.jpeg'

             },
                 text:'<b>About this item</b></br>Important Made in USA Origin Disclaimer: For certain items sold by Walmart on Walmart.com, the displayed country of origin information may not be accurate or consistent with manufacturer information. For updated, accurate country of origin data, it is recommended that you rely on product packaging or manufacturer information.',
                 description: '"Samsung Galaxy Tab A 9.7" 16GB Smoky Titanium Wi-Fi SM-T550NZAAXAR"'
                 },
                 {id:3,
                  category:'tabs',
                  title:'Samsung Galaxy Tab A Sm-t280',
                  img:{
                         img_0:'./img/sASm.jpeg',
                         img_1:'./img/sASm_1.jpeg'

                     },
                  text:' <b>About this item</b></br> Important Made in USA Origin Disclaimer: For certain items sold by Walmart on Walmart.com, the displayed country of origin information may not be accurate or consistent with manufacturer information. For updated, accurate country of origin data, it is recommended that you rely on product packaging or manufacturer information.',
                  description:'Samsung Galaxy Tab A Sm-t280 8 Gb Tablet - 7" - Plane To Line [pls] Switching - Wireless Lan Quad-core [4 Core] 1.30 Ghz - White - 1.50 Gb Ram - Android 5.1 Lollipop - Slate - 1280 X (sm-t280nzwaxar)'
                 },
                 {id:4,
                 category:'tabs',
                 title:'Samsung Galaxy Note 10.1',
                 img:{
                         img_0:'./img/sGN10.jpeg'

                     },
                 text:' <b>About this item</b></br> Important Made in USA Origin Disclaimer: Samsung Galaxy Note 10.1 (16GB, White) Android 4.0 Ice Cream Sandwich, 10.1-inch Display Samsung Tablet Processor 1.4 GHz 2 GB RAM Memory, 16GB On-Board Memory S Pen included',
                 description:'Samsung Galaxy Note 10.1 (16GB, White)'
                 },
                 {id:5,
                     category:'iPad',
                     title:'Apple iPad mini 2',
                     img:{
                         img_0:'./img/iPadmini2.jpeg'

                     },
                     text:' <b>About this item</b></br>  For certain items sold by Walmart on Walmart.com, the displayed country of origin information may not be accurate or consistent with manufacturer information. For updated, accurate country of origin data, it is recommended that you rely on product packaging or manufacturer information.',
                     description:'Choose 32GB, 64GB or 128GB 7.9" Retina display'
                 },
                 {id:6,
                     category:'iPad',
                     title:'Apple iPad Air 2 16GB Wi-Fi + Cellular Gold Refurbished',
                     img:{
                         img_0:'./img/iPadAir2.jpeg'

                     },
                     text:' <b>About this item</b></br>  For certain items sold by Walmart on Walmart.com, the displayed country of origin information may not be accurate or consistent with manufacturer information. For updated, accurate country of origin data, it is recommended that you rely on product packaging or manufacturer information..',
                     description:'9.7-inch Retina display (diagonal)Touch ID fingerprint sensor'
                 },
                 {id:7,
                     category:'iPad',
                     title:'Apple iPad 3 16GB White Wi-Fi Refurbished',
                     img:{
                         img_0:'./img/iPad3.jpeg'

                     },
                     text:' <b>About this item</b></br>  For certain items sold by Walmart on Walmart.com, the displayed country of origin information may not be accurate or consistent with manufacturer information. For updated, accurate country of origin data, it is recommended that you rely on product packaging or manufacturer information..',
                     description:'9.7-inch Retina display (diagonal)Touch ID fingerprint sensor'
                 },
                 {id:8,
                     category:'iPad',
                     title:'Apple iPad 2 16GB Wi-Fi Refurbished Black with 1 Year Warranty',
                     img:{
                         img_0:'./img/iPad2.jpeg'

                     },
                     text:' <b>About this item</b></br>  For certain items sold by Walmart on Walmart.com, the displayed country of origin information may not be accurate or consistent with manufacturer information. For updated, accurate country of origin data, it is recommended that you rely on product packaging or manufacturer information..',
                     description:'9.7" touchscreen 1.0GHz A5 Dual-Core processor'
                 }];
             service.getGoods=function () {
                 return goods;
             };
             service.getProduct=function(element){
                return _.find(goods,{ id : element });

             };
             console.log('factory');
             return service;
         });
