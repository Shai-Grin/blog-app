(function (app) {

app.service('paginationService', paginationService);

    function paginationService(PostService,  $route){


        var numberOfPostsPerPage = 3;

        function urlUpdate() {
            if(posts.length > 3) {
                $route.updateParams({num: 0});
            } else {
                $route.updateParams({num: undefined});
            }
        }



        this.urlUpdate = urlUpdate;
    };

    paginationService.$inject = ['PostService', '$route'];

})(angular.module('blogapp'));