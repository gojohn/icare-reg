var app = (function () {
  var app = angular.module( 'icare', ['ngResource'] 
//  ).config(
//   [
//    '$routeProvider',
//    function ( $routeProvider ) {
//      $routeProvider.
//        when('/home',               { templateUrl: 'partials/home.html',          controller: RegistrationCtrl   } ).
//        when('/list',               { templateUrl: 'partials/list.html',          controller: ListCtrl   } ).
//        when('/register',           { templateUrl: 'partials/register.html',          controller: RegisterCtrl   } ).
//       otherwise( { redirectTo: '/home' } );
//    }
//    ]
   ).config(
      [
      '$httpProvider',
      function( provider ) {
        provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
      }
    ]
  );

  return app;
})();