(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.sayMessage = "";

  $scope.checkIfTooMuch = function() {
    var numOfMenuItems = getLunchMenuItems($scope.lunchMenu);
    //console.log(numOfMenuItems, $scope.lunchMenu);
    if (numOfMenuItems == 0) {//textbox Empty
      $scope.sayMessage = "Please enter data first";
    } else {
      if (numOfMenuItems <= 3) {
        $scope.sayMessage = "Enjoy!";
      } else {
        $scope.sayMessage = "Too much!";
      }
    }
  }
}

function getLunchMenuItems(string) {
  var totalStringItems = 0;
  if (string.length != 0) {
    var stringArr = string.split(",");
    //console.log(stringArr);
    //console.log("Input length is " + stringArr.length);
    for (var i = 0; i < stringArr.length; i++) {
      if ((stringArr[i] == "") || (stringArr[i] == " ")){
        continue;
      } else {
        totalStringItems++;
      }
    }
  }

  return totalStringItems;
}

})();
