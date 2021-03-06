app.controller('FilmsCtrl', ['$scope', 'FilmsFactory', function($scope, FilmsFactory) {
  $scope.movieId = '';
  $scope.films = [];
  $scope.loading = false;

  $scope.getAll = function() {
    $scope.loading = true;
    FilmsFactory.query(function success(data) {
      $scope.films = data.results;

      // loops through characters in each film

      $scope.characters = data.results.characters;
      console.log('***** ', $scope.characters)

      $scope.loading = false;
    });
  };

  $scope.getMovie = function(id) {
    $scope.loading = true;
    FilmsFactory.get({ id: id }, function success(data) {
      $scope.films = [data];
      $scope.loading = false;
    }, function error(data) {
      console.log('error: ', data);
      $scope.loading = false;
    });
  };
}]);
