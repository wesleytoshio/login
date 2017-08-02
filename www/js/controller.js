app.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $rootScope, $http, Auth) {
    $scope.data = {};
    $scope.data.email = 'wesley@wesleydev.com';
    $scope.data.password = '123';
    $scope.login = function() {
        Auth.email($scope.data).then(function(r) {
            console.log(r);
        }).catch(function(e) {
            console.log();
        })
    };
})