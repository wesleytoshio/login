'use strict';

app.service('Auth', Auth);

function Auth($http) {
    var vm = this;

    vm.email = function(data) {
        var config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return $http.post('http://wesleydev.com/api/login.php', data, config);

    };
}