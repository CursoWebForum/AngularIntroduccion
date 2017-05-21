var app = angular.module("app", ['ngSanitize']);

app.controller("PruebaController", function($scope) {
  $scope.mensaje = "Hola <strong>Mundo</strong>";
});

