'use strict';

goog.provide('Transportation.Directives.MyColDirective');

Transportation.Directives.MyColDirective = function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'partials/my-col.htm'        
    };
};