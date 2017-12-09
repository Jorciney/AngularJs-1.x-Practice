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
}]);

myApp.controller('MyControllerTestingGET', ['$scope', '$http', function ($scope, $http) {
    $scope.title = 'Testing http GET method'

    // Way to get data from html(JSon format)
    var promise = $http.get('https://api.github.com/users/robconery');
    promise.then(function (response) {
        $scope.user = response.data;
    });

    // Second way to get the data
    $http.get('https://api.github.com/users/simonjefford')
        .then(function (response) {
            $scope.user2 = response.data
        });

    //Third way to do get the data
    var onUserComplete = function (response) {
        $scope.user3 = response.data;
    }
    var onError = function (reason) {
        $scope.error = 'Could not fetch the user!';
    }
    $http.get('https://api.github.com/users/john')
        .then(onUserComplete, onError);
    //note that you can pass a second function in case of error

}]);
