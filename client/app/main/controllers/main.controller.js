'use strict';

(function (angular) {

    angular.module('SystemPerfApp.Main', [])
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state('main', {
                        url: '/',
                        templateUrl: 'app/main/views/main.html',
                        controller: 'MainController as mainVM'
                    });
            }])
        .controller('MainController', MainController);


    MainController.$inject = ['$scope'];
    function MainController($scope) {
        console.log('MainController');
    }

})(angular);
