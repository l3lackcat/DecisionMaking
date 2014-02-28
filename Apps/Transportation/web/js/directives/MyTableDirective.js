'use strict';

goog.provide('Transportation.Directives.MyTableDirective');

Transportation.Directives.MyTableDirective = function () {    
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            columnCount: '=',
            rowCount: '='
        },
        controller: 'MyTableController',
        templateUrl: 'partials/my-table.htm',
        link: function (scope, element, attrs) {
            scope.initialize();
        }
    };
};