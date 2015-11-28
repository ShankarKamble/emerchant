var ngcDirectives = angular.module("ngcDirectives", [])

// home view header directive
.directive('mainHeader', function($timeout) {
    return {
        restrict: 'A',
        templateUrl: 'partials/main-header.html'
    }
})

// input clear
.directive('clearInput', function() {
    return {
        restrict: 'A',
        scope: '@',
        link: function(scope, elem, attr) {
            elem.on('click', function() {
                elem.parent().find('input').val('');
                elem.addClass('hide');
            })

        }
    }
})


