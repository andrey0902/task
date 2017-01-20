App.
  config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {

          $routeProvider.
          when('/', {
              templateUrl: '/tpl/main.html'
          }).
          when('/more/:id', {
              templateUrl: '/tpl/product.html'
          }).otherwise({
              redirectTo: '/404',
              templateUrl: '/tpl/error.html'
          })

  }]);