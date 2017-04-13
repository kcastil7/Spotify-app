angular.module('TVMazeSrvc', [])
    .factory('TVMazeService', function($resource) {
        return {
            search: $resource('/api/search')
            // detail: ???
        }
    })