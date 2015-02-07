/**
 * @author Muhammad Rosli <muhd7rosli@live.com>
 */
var simpleApp = angular.module('simpleApp', ['ngRoute']);

var routeConfig = function($routeProvider){
    $routeProvider
        .when('/',{
            controller: 'SimpleController',
            templateUrl: 'partials/home.html'
        })
        .when('/login',{
            controller: 'LoginController',
            templateUrl: 'partials/login.html'
        })
        .when('/home',{
            controller: 'SimpleController',
            templateUrl: 'partials/home.html'
        })
        .otherwise({redirectTo: '/'});
};

routeConfig.$inject = ['$routeProvider'];
simpleApp.config(routeConfig);

var SimpleController = function($scope){


};
SimpleController.$inject = ['$scope'];

var LoginController = function($scope){
    
    
};
LoginController.$inject = ['$scope'];

simpleApp.controller('SimpleController', SimpleController);
simpleApp.controller('LoginController', LoginController);
