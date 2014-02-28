'use strict';

goog.provide('Transportation.Controllers.MyTableController');

Transportation.Controllers.MyTableController = function ($scope, $attrs, $element) {
    $scope.rows = [];

    $scope.initialize = function () {
        for(var i = 0; i < $scope.rowCount; i++) {
            var columns = [];
            for(var j = 0; j < $scope.columnCount; j++) {
                if (i === 0) {
                    var column = {
                        alignment: 'halign-center',                
                        text: j > 0 ? j : String.fromCharCode(160),
                        type: 'title'
                    };

                    if (j === 0) {
                        column.text = String.fromCharCode(160);
                    } else if (j === $scope.columnCount - 1) {
                        column.text = 'Total';
                    } else {
                        column.text = j;
                    }
                    
                    columns.push(column);                       
                } else {
                    if (j === 0) {
                        columns.push({    
                            alignment: 'halign-right',                
                            text: i,
                            type: 'title'
                        });
                    } else {
                        columns.push({    
                            price: '$100',                
                            text: i + ',' +j,
                            type: 'content'
                        });
                    } 
                }                                    
            }

            $scope.rows.push({
                columns: columns
            });
        }

        console.log($scope.rows);
    };
};