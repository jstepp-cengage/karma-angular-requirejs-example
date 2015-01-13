define([
    "angular"
    ], function (angular) {

    angular.module('example').controller("controllerExample", function ($scope) {

        var _data = null;

        $scope.setExampleData = function (data) {
            _data = data;
        };

        $scope.getExampleData = function () {
            return _data;
        };

    });

});
