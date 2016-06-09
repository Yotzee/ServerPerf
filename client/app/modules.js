'use strict';

(function (angular) {

    angular.module('SystemPerfApp.Modules', [
        'ui.router',
        'SystemPerfApp.Main',
        'SystemPerfApp.Performance'
    ]);

    angular.module('SystemPerfApp.Main', []);
    angular.module('SystemPerfApp.Performance', []);
})(angular);