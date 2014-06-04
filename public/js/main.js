
var myApp = angular.module("tippeKonk", ["ngRoute"]);
myApp.config(['$routeProvider',
function($routeProvider) {
  $routeProvider
  .when('/groups', {
    templateUrl: 'views/groups.html',
    controller: 'GroupsCtrl'
  })
  .when('/user', {
    templateUrl: 'views/user.html',
    controller: 'UserCtrl'
  })
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'FlagListCtrl'
  });
}]);

myApp.controller('UserCtrl', ['$scope', function ($scope) {

  dpd.users.me(function(me) {
    $scope.myuser = me;
    console.log(me);
  });

}]);
myApp.controller('GroupsCtrl', ['$scope', function ($scope) {

  dpd.groups.get(function (groups, err) {
    if(err) return console.log(err);
    $scope.groups = groups;
    console.log(groups);
  });

}]);
myApp.controller('LoginCtrl', ['$scope', function ($scope) {


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
