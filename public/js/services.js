/* Services */
var ngcServices = angular.module('ngcServices', []);

//get data svc
ngcServices.factory('dataSvc', ['$http', '$q', function($http, $q) {
    return {
        getQuery: function(src) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: src
            }).
            success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
        postQuery: function(src, data) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: src,
                data:data
            }).
            success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
        putQuery: function(src, data) {
            var deferred = $q.defer();
            $http({
                method: 'PUT',
                url: src,
                data:data
            }).
            success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
        deleteQuery: function(src, data) {
            var deferred = $q.defer();
            $http({
                method: 'DELETE',
                url: src,
                data:data
            }).
            success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
    };

}]);

