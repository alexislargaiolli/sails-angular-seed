'use strict';

/**
 * @ngdoc directive
 * @name myModule.directive:loadingScreen
 * @description
 * # loadingScreen
 */
angular.module('myModule').directive(
    "mAppLoading",
    function ($animate, $timeout) {

        // Return the directive configuration.
        return ({
            link: link,
            restrict: "C"
        });


        // I bind the JavaScript events to the scope.
        function link(scope, element, attributes) {

            $animate.leave(element.children().eq(1)).then(
                function cleanupAfterAnimation() {

                    // Remove the root directive element.
                    element.remove();

                    // Clear the closed-over variable references.
                    scope = element = attributes = null;

                }
            );

        }

    }
);
