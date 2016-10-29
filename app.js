(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.resultMessage = "";
    $scope.fontCollor = "";

    $scope.checkIfTooMuch = function() {
      var result = calculateNumberOfItems($scope.items);
      if (!result || result === 0) {
        $scope.resultMessage = "Please enter data first";
          $scope.fontCollor = "red";
      } else if (result <= 3) {
        $scope.resultMessage = "Enjoy!";
          $scope.fontCollor = "green";
      } else if (result > 3) {
        $scope.resultMessage = "Too much!";
          $scope.fontCollor = "green";
      }
    };

    // Calculate the number of items submitted
    function calculateNumberOfItems(string) {
        var numberOfItems = 0;
      var itemsArray = splitString(string);
      for (var i = 0; i < itemsArray.length; i++) {
        if (!isEmptyStringOrWhiteSpace(itemsArray[i])) {
          numberOfItems += 1;
        }
      }
      return numberOfItems;
    }

    // Split string to an array of strings
    function splitString(string) {
      return string.split(",");
    }

    // Check if string is blank or contains only white-space
    function isEmptyStringOrWhiteSpace(string) {
      return (!string || string.length === 0 || string.replace(/\s/g,"") == "");
    }
  }
 })();
