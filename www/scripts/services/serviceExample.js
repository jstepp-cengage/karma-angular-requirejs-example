define([
    "angular"
    ], function (angular) {

    angular.module("example").factory("serviceExample", function () {

        return {
            _data: null,

            getServiceData: function () {
                return this._data;
            },

            setServiceData: function (data) {
                this._data = data;
            }
        };

    });

});
