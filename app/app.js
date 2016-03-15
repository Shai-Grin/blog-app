(function () {
	// You app starts here
    var myApp = angular.module('blogapp', ['ngRoute']);



    myApp.config(function($routeProvider){
        $routeProvider
            .when('/', {
                redirectTo: '/posts'
            }).when('/posts/:num?', {
                templateUrl:'app/posts/templates/posts.html',
                controller: 'postsAccess as postsCtrl',
                resolve: {
                    url: function(paginationService){

                    }
                }
            }).when('/post/:pageTitle', {
                template: `<ng-include src="'data/posts/html/' + postsCtrl.hyphenToFilename(postsCtrl.currTitle)" class="ng-scope col-md-8">`,
                controller: 'postsAccess as postsCtrl'
            }).when('/admin', {
                templateUrl: '/app/admin/templates/admin.html',
                controller: 'adminAccess as adminCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
}());
