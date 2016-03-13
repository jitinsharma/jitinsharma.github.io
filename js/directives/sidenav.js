/**
 * Created by jitin on 10-07-2015.
 */

    app.directive("sideNav", [function () {
        return {
            scope: {
            },
            link: function (scope, element, attrs) {
                $(element).sideNav({
                    closeOnClick: true,
                });
            }
        };
    }]);