define([
    "angular",
    "angularMocks",
    "../../scripts/controllers/controllerExample"
], function (angular, mocks, ControllerExample) {

    describe("controllerExample test", function () {

        var scope, controllerExample;

        beforeEach(function () {
            mocks.module("example");

            inject(["$rootScope", "$controller", function ($rootScope, $controller) {
                scope = $rootScope.$new();
                controllerExample = $controller("controllerExample", {
                    $scope: scope
                });
            }]);
        });

        it("should get the value", function () {
            var data = 42;
            scope.setExampleData(data);
            expect(scope.getExampleData()).toEqual(data);
        });

    });

});
