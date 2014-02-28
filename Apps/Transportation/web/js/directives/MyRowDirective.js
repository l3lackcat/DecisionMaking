'use strict';

goog.provide('Transportation.Directives.MyRowDirective');

Transportation.Directives.MyRowDirective = function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {},
        templateUrl: 'partials/my-row.htm'        
    };
};