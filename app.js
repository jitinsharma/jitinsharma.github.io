/**
 * Created by jitin on 07-07-2015.
 */
var app = angular.module('MyWebsite', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'html/Home.html',
            controller  : 'MainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'html/AboutMe.html',
            controller  : 'MainController'
        })

        .when('/blog', {
            templateUrl : 'html/Blog.html',
            controller  : 'MainController'
        })

        // route for the resume page
        .when('/resume', {
            templateUrl : 'html/Resume.html',
            controller  : 'MainController'
        });
});
/*
var main = function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
};

$(document).ready(main);*/
