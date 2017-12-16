//define the myApp variable
var myApp = angular.module('myApp', []);

//controller
myApp.controller('MainController', ['$scope', function ($scope) {
    var person = {
        firstName: 'Jorciney',
        lastName: 'Dias Chaveiro',
        imageSrc: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAoGAAAAJDA4N2VmMzkzLTBiNWQtNDU2NS1iZDA1LTc4YjkwYzQwMTJkMQ.jpg'
    };

    $scope.message = 'Hello, Angular world!';
    $scope.person = person;
    $scope.showSearchResult = false;


}]);
myApp.controller('MyControllerTestingGET', ['$scope', '$http', function ($scope, $http) {
    $scope.title = 'Random users';

    // Way to get data from html(JSon format)
    var promise = $http.get('https://api.github.com/users/robconery');
    promise.then(function (response) {
        $scope.user = response.data;
    });

    // Second way to get the data
    $http.get('https://api.github.com/users/jorciney')
        .then(function (response) {
            $scope.user2 = response.data;
        });

    //Third way to do get the data
    var onUserComplete = function (response) {
        $scope.user3 = response.data;
    };
    var onError = function (reason) {
        $scope.error = 'Could not fetch the user!';
    };
    $http.get('https://api.github.com/users/john')
        .then(onUserComplete, onError);
    //note that you can pass a second function in case of error

    //search user
    $scope.search = function (username) {
        if (username !== null && username.length > 1) {
            $scope.showSearchResult = true;
            $scope.showError = false;
            $http.get('https://api.github.com/users/' + username)
                .then(onFoundUser, onSearchError);
        } else
            $scope.showSearchResult = false;
    };
    var onFoundUser = function (response) {
        $scope.foundUser = response.data;
        $http.get($scope.foundUser.repos_url).then(
            onRepository, onSearchError
        );

    };
    var onRepository = function (response) {
        $scope.repositories = response.data;
        // angular.forEach(repositories, getCommitCount(repo));
    };

    // var getCommitCount = function (repo) {
    //     $scope.myArrayOfCommits = [];
    //     $http.get(repo.commits_url).then(
    //         function (response) {
    //             $scope.myArrayOfCommits.push(response.data);
    //         }, function (reason) {  }
    //     );
    // };
    var onSearchError = function (reason) {
        $scope.showError = true;
        $scope.error = 'Could not fetch the data!';
    };

}]);
