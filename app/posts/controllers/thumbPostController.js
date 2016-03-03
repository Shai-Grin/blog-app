(function(app){

    app.controller('thumbPostController', function(){
        this.hyphenate = function (string){
            return string.replace(/([\s\W])+/g, '-');
        }
    });

})(angular.module('blogapp'));