'use strict';

goog.provide('Transportation.App');

goog.require('Transportation.Controllers.MyTableController');

// goog.require('Transportation.Directives.MyColDirective');
// goog.require('Transportation.Directives.MyRowDirective');
goog.require('Transportation.Directives.MyTableDirective');

Transportation.App = angular.module('TransportationApp', ['ngRoute']);

Transportation.App.config(['$routeProvider', function ($routeProvider) {}]);

Transportation.App.controller('MyTableController', ['$scope', '$attrs', '$element', Transportation.Controllers.MyTableController]); 

// Transportation.App.directive('myCol', Transportation.Directives.MyColDirective);
// Transportation.App.directive('myRow', Transportation.Directives.MyRowDirective);
Transportation.App.directive('myTable', Transportation.Directives.MyTableDirective);