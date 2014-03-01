'use strict';

goog.provide('Transportation.Controllers.MyTableController');

Transportation.Controllers.MyTableController = function ($scope, $attrs, $element) {
    var cellWidth = 100;
    var prices = [
        [40, 110, 100],
        [50, 80, 120],
        [70, 60, 90]
    ];

    var sources = [
        {title: 'F1', total: 140},
        {title: 'F2', total: 100},
        {title: 'F3', total: 60},
    ];

    var destinations = [
        {title: 'I1', total: 100},
        {title: 'I2', total: 120},
        {title: 'I3', total: 80},
    ];

    $scope.rows = [];

    $scope.initialize = function () {
        updateLayout();
        updateContent();
    };

    $scope.runNorthWest = function () {
        for(var i = 0; i < $scope.rowCount; i++) {
            for(var j = 0; j < $scope.columnCount; j++) {
                var cellType = getType(i,j);
                if (cellType === 'content') {                    
                    var sTotal = sources[i - 1];
                    var dTotal = destinations[j - 1];

                    var mTotal = sTotal >= dTotal ? sTotal : dTotal;
                    while (mTotal > 0) {

                    }
                }                            
            }
        }

        var rowIndex = 0;
        var colIndex = 0;
        var rowCount = $scope.rowCount;
        var colCount = $scope.colCount;

        while ((rowIndex < rowCount) && (colIndex < colCount)) {
            
        }
    }

    function updateLayout () {
        updateTableWidth();
    }

    function updateTableWidth () {
        $element[0].style.width = cellWidth * $scope.columnCount + 'px';
    }

    function updateContent () {
        for(var i = 0; i < $scope.rowCount; i++) {
            var columns = [];

            for(var j = 0; j < $scope.columnCount; j++) {
                columns.push({    
                    alignment: getStyle(i, j),
                    price: getPrice(i, j),                
                    text: getText(i, j),
                    type: getType(i, j)
                });                                   
            }

            $scope.rows.push({
                columns: columns
            });
        }
    }    

    function getPrice(rowIndex, colIndex) {
        var price = '';

        if ((rowIndex > 0) && (rowIndex < $scope.rowCount - 1)) {
            if ((colIndex > 0) && (colIndex < $scope.columnCount - 1)) {
                price = prices[rowIndex - 1][colIndex - 1];
            }
        }

        if (price !== '') {
            price = '$' + price;
        }

        return price;
    }

    function getStyle(rowIndex, colIndex) {
        var style = '';

        if (rowIndex === 0) {
            style = 'halign-center';
        } else {
            if (colIndex === 0) {
                style = 'halign-right';
            }
        }

        return style;
    }

    function getText(rowIndex, colIndex) {
        var text = '';

        console.log(rowIndex + ',' + colIndex);

        if (rowIndex === 0) {
            if (colIndex === 0) {
                text = String.fromCharCode(160);
            } else if (colIndex === $scope.columnCount - 1) {
                text = 'Total';
            } else {
                text = destinations[colIndex - 1].title;
            }
        } else if (rowIndex === $scope.rowCount - 1) {
            if (colIndex === 0) {
                text = 'Total';
            } else if (colIndex === $scope.columnCount - 1) {
                text = calculateGrandTotal();
            } else {
                text = destinations[colIndex - 1].total;
            }
        } else {
            if (colIndex === 0) {
                text = sources[rowIndex - 1].title;
            } else if (colIndex === $scope.columnCount - 1) {
                text = sources[rowIndex - 1].total;
            } else {
                text = rowIndex + ',' + colIndex;
            }
        }

        return text;
    }

    function getType(rowIndex, colIndex) {
        var type = 'content';

        if (rowIndex === 0) {
            if (colIndex === 0) {
                type = '';
            } else if (colIndex === $scope.columnCount - 1) {
                type = 'total';
            } else {
                type = 'title';
            }
        } else if (rowIndex === $scope.rowCount - 1) {
            if (colIndex === 0) {
                type = 'title';
            } else if (colIndex === $scope.columnCount - 1) {
                type = 'grand-total';
            } else {
                type = 'total';
            }
        } else {
            if (colIndex === 0) {
                type = 'title';
            } else if (colIndex === $scope.columnCount - 1) {
                type = 'total';
            }
        }

        return type;
    }

    function calculateGrandTotal () {
        var grandTotal = 0;

        var grandTotalRow = 0;
        for (var i = sources.length - 1; i >= 0; i--) {
            grandTotalRow += sources[i].total;
        }

        var grandTotalCol = 0;
        for (var i = destinations.length - 1; i >= 0; i--) {
            grandTotalCol += destinations[i].total;
        };

        if (grandTotalRow === grandTotalCol) {
            grandTotal = grandTotalRow;
        }

        return grandTotal;
    }
};