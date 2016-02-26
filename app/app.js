(function () {
	// You app starts here
    var myApp = angular.module('blogapp', ['ngRoute']);

    myApp.factory('PostService', function($http){
        return $http({
            method: 'GET',
            url: '/data/posts.json'
        })
    });

    myApp.config(function($routeProvider){
        $routeProvider
            .when('/', {
                redirectTo: '/posts/0'
            }).when('/posts', {
                redirectTo: '/posts/0'
            }).when('/posts/:num', {
                templateUrl:'app/posts/templates/posts.html',
                controller: 'postsAccess as postsCtrl'
            }).when('/posts:pageNum?', {
                templateUrl:'app/posts/templates/posts.html',
                controller: 'postsAccess as postsCtrl'
            })
            .when('/admin', {
                templateUrl: '/app/admin/templates/admin.html',
                controller: 'adminAccess as adminCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
}());
