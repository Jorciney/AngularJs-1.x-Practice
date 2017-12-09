//define the myApp variable
var myApp=angular.module('myApp',[]);

//controller
myApp.controller('MainController',['$scope',function($scope){
    var person ={
        firstName:'Jorciney',
        lastName:'Dias Chaveiro',
        imageSrc:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAoGAAAAJDA4N2VmMzkzLTBiNWQtNDU2NS1iZDA1LTc4YjkwYzQwMTJkMQ.jpg'
    };

    $scope.message='Hello, Angularworld!';
    $scope.person = person;


}]);
