var myApp = angular.module('blogapp');
myApp.controller('postsAccess', function(PostService,$routeParams){
    var vm = this;
    this.startAt = parseInt($routeParams.num || 0);
    this.quantity = 3;
    PostService.then(function(postCont){
        vm.posts = postCont.data.posts;
    });


});