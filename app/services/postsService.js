(function (app) {

    app.service('PostService', PostService);

    function PostService($http){
        var posts;

        const numberOfPostsPerPage = 3;


        function filterPosts(posts, filter) {

        }

        function postGetter() {
            if (retrievePosts().then === 'function'){
                retrievePosts().then(function(promise){
                    return promise.data.posts;
                })
            } else {
                return retrievePosts();
            }
        }

        function getPosts() {
            return $http({
                method: 'GET',
                url: '/getPosts'
            }).then(function(promise){
                posts = promise.data.posts;
            })
        }

        function retrievePosts() {
            return posts || getPosts();
        }

        this.postGetter = postGetter;

        this.postPerPage = function (){
            return numberOfPostsPerPage;
        }
    }

    PostService.$inject = ['$http'];

})(angular.module('blogapp'));