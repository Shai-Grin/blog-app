var myApp = angular.module('blogapp');
myApp.controller('postsAccess', function(PostService,$routeParams){
    var vm = this;
    this.startAt = parseInt($routeParams.num || 0);
    this.quantity = 3;
    this.currTitle = $routeParams.pageTitle;
    PostService.then(function(postCont){
        vm.posts = postCont.data.posts;
    });

    this.hyphenToFilename = function (string) {
        var nameArr = string.split('-');
        return nameArr[0] + " - " + nameArr.slice(1).join(', ') + '.html';
    };

});