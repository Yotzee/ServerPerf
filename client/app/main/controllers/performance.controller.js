'use strict';
(function (angular) {
    
    angular.module('SystemPerfApp.Performance',[])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('main.performance', {
                        url: '/performance',
                        templateUrl: 'app/main/views/performance.html',
                        controller: 'PerformanceController as performanceVM'
                    });
            }])
        .controller('PerformanceController', PerformanceController);

    PerformanceController.$inject = ['$scope','$http'];
    function PerformanceController($scope, $http){
        console.log('here');
        $http.get('/api/os/cpus')
            .then(function(res){
                $scope.processors = res;
            });
    }

})(angular);
