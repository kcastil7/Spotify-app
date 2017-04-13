angular
    .module('TVMazeCtrl', [])
    .controller('TVMazeController', function($scope, TVMazeService) {

        $scope.searchShow = () => {
            TVMazeService.search.query({
                show: $scope.showname
				
            }, (response) => {
                $scope.results = response
            })
        }
		
		$scope.searchalbums = () => {
            TVMazeService.search.query({
                show: artist
            }, (response) => {
                $scope.results = response
            })
        }

    })