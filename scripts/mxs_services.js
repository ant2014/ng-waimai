angular.module('mxs.services', ['ngResource'])
    .run(["$rootScope", function ($rootScope) {
        var b = document.domain.replace(/^(.+?\.)??(?=(test\.)?[^.]+\.\w+$)/, "");
        $rootScope.ROOTHOST = b;
        $rootScope.RESTBASE = 'http://www.' + $rootScope.ROOTHOST + "/beehive/microsite";
        $rootScope.defaultSig = {sig: "DBE8317A0D713425B738C762D1639492"};
        //$rootScope.RESTBASE = "http://localhost:8123/beehive/microsite";
    }])

    .factory('dishes', ['$resource', '$rootScope', function ($resource, $rootScope) {
        return $resource($rootScope.RESTBASE + '/dishes/alldishes', $rootScope.defaultSig, {
            pullDishes: {method: "POST"}
        });
    }])

    .factory('address', ['$resource', '$rootScope', function ($resource, $rootScope) {
        return $resource($rootScope.RESTBASE + '/user/alldistribution', $rootScope.defaultSig, {
            pullDishes: {method: "POST"}
        });
    }]);
