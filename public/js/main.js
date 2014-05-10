var myApp = angular.module("tippeKonk", ["ngRoute"]);
myApp.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'FlagListCtrl',
    controllerAs: 'FlagList'
  })
  .when('/User/', {
    templateUrl: 'views/user.html',
    controller: 'UserCtrl',
    controllerAs: 'user'
  });

  // configure html5 to get links working on jsfiddle
  //$locationProvider.html5Mode(true);
}]);
myApp.controller('UserCtrl', ['$scope', '$http', function ($scope, $http) {

  $scope.loggedInUser = undefined;
  // TODO : check if user is logged in

}]);
myApp.controller('LoginCtrl', ['$scope', '$http', function ($scope, $firebase) {


  dpd.users.me(function(me) {
    $scope.loggedInUser = me;
    console.log(me);
  });
  $scope.createUser = function (email, password) {
    dpd.users.post({"username": email, "password": password}, function(user, err) {
      if(err) return console.log(err);
      console.log(user);
    });
  }
  $scope.loginUser = function (email, password) {
    dpd.users.login({"username": email, "password": password }, function(user, err) {
      if(err) return console.log(err);
      console.log(user);
      $scope.loggedInUser = user;
    });
  };
}]);

myApp.controller('FlagListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get("/countries").success(function (countries) {
    $scope.countries = countries;
  });
}]);
