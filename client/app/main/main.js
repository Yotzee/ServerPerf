angular.module('SystemPerfApp.Main', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/performance");
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: "app/main/main.html"
            })
            .state('main.performance', {
                url: "/performance",
                templateUrl: "app/main/performance/performance.js"
            })
    });