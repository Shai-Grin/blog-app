
(function (app) {
    app.controller('postsAccess', postsAccess);

    function postsAccess(PostService,$routeParams){
        var vm = this;

        this.startAt = parseInt($routeParams.num || 0);
        this.quantity = 3;
        this.currTitle = $routeParams.pageTitle;
        this.posts = PostService.postGetter();




        this.hyphenToFilename = function (string) {
            var nameArr = string.split('-');
            return nameArr[0] + " - " + nameArr.slice(1).join(', ') + '.html';
        };


    };


    postsAccess.$inject = ['PostService', '$routeParams'];

})(angular.module('blogapp'));
