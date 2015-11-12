/**
 * @author Muhammad Rosli <muhd7rosli@live.com>
 */
var simpleApp = angular.module('simpleApp', ['ngRoute', 'ngResource']);

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

var SimpleController = function($scope, $http){

    $scope.greeting = {"info" : "Loading"};

    $http({
        method: 'GET',
        url: '/wildfly-javaee7-angularjs/rest/helloworld',
        headers: {
            'Content-Type': 'application/json'
        }
    }).success(function (data) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.greeting = data;
    });



};
SimpleController.$inject = ['$scope', '$http'];

var LoginController = function($scope){
    
    
};
LoginController.$inject = ['$scope'];

simpleApp.controller('SimpleController', SimpleController);
simpleApp.controller('LoginController', LoginController);
