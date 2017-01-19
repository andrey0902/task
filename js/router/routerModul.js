
  App.
  config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        /*  $locationProvider.html5Mode(true);*/

          $routeProvider.
          when('/', {
              templateUrl: '/tpl/main.html'
          }).
          when('/more/:id', {
              templateUrl: '/tpl/product.html'
          })





     /* .config(['$locationProvider', '$routeProvider',function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
      }),
          $routeProvider
          .when('/',{
              templateUrl: '/tpl/main.html'
          })
          .when('/main',{

              templateUrl:'/tpl/main.html'
          })
              .when('/create',{
                  templateUrl:'/tpl/create.html'

              })
              .when('/admin',{
                  templateUrl:'/tpl/admin/admin.html'
              })
              .when('/admin/main',{
                  templateUrl:'/tpl/admin/adminMain1.html'
              })
              .when('/admin/create',{
                  templateUrl:'/tpl/admin/create.html'
              })
              .when('/send',{
                  templateUrl:'/tpl/send.html'

              })
              .otherwise({
                  redirectTo: '/404',
                  templateUrl: '/tpl/form.html'
              })*/
  }]);