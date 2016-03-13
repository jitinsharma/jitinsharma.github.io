/**
 * Created by jitin on 10-07-2015.
 */

app.directive("parallaxDirective", [function () {
    return {
        scope: {
        },
        link: function (scope, element, attrs) {
            $(element).parallax();
        }
    };
}]);