'use strict';

angular.
  module('homeApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.      
      when('/inicio', {
        template: '<dashboard></dashboard>'
      }).
        when('/filmes', {
          template: '<list-film></list-film>'
        }).
        otherwise('/inicio');
    }
  ]);
