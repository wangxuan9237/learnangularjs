angular.
    module("core.blog").
    factory("Blog",["$resource",
        function($resource){
            return $resource('/blogs/:blogId');
        }
    ]);
