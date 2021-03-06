angular.module('sportsCardApp', ["ngRoute", 'infinite-scroll'])



    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "about.html",

            })
            .when("/catalog", {
                templateUrl: "catalog.html",
                controller: 'cardController'

            })
            .when("/login", {
                templateUrl: "admin-login.html",
            })
            .otherwise({
                templateUrl: "about.html"
            })
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    });
