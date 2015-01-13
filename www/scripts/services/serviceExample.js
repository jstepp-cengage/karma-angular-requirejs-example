define([
    "angular"
    ], function (angular) {

    angular.module("example").service("example", function () {

        var _data = null;

        this.getServiceData = function () {
            return _data;
        };

        this.setServiceData = function (data) {
            _data = data;
        };

    });
    
});
