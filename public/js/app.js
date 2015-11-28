/* JS for angular app */

var app = angular.module('app', ['ngRoute', 'ngSanitize', 'ngTouch', 'ngcControllers', 'ngcDirectives', 'ngcServices'])

.config(['$routeProvider', '$compileProvider', function($routeProvide, $compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);

    $routeProvide
       
        .when("/login", {
            templateUrl: "partials/login.html",
            controller: 'loginCtrl'
        })
        .when("/mobile", {
            templateUrl: "partials/mobile.html",
            controller: 'mobileCtrl'
        })
    .otherwise({
        redirectTo: '/login'
    });
}])


//global event handler  
.run(function($rootScope, $window, $location, $timeout) {
    $rootScope.go = function(path) {
        $rootScope.app;
        if (path === 'back') { // Allow a 'back' keyword to go to previous page
            $window.history.back();
        } else { // Go to the specified path
            $location.path(path);
        };

    };

})

