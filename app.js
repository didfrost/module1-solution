(function (){
'use strict'

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  //$scope.foodsOrder = "";
  $scope.foodsOrder = "first, ,second, third, next";

  $scope.click = function (){
    $scope.submessage = "";
    var result = check($scope.foodsOrder);
    var total = result[0];
    if (total == 0){
      $scope.message = "Please enter data first";
      $scope.stlMessage = {
          "color" : "red",
          "border-style" : "solid",
          "border-color" : "red"
        }
    }else if (total <= 3){
      $scope.message = "Enjoy!";
      $scope.stlMessage = {
          "color" : "green",
          "border-style" : "solid",
          "border-color" : "green"
        }
    }else{
      $scope.message = "Too much!";
      $scope.stlMessage = {
          "color" : "green",
          "border-style" : "solid",
          "border-color" : "red"
        }
    }
    var num_of_empty = result[1];

    if (num_of_empty == 1) {
      $scope.submessage = "Attention! You have an empty dish.";
    }else if (num_of_empty > 1) {
      $scope.submessage = "Attention! You have several empty dishes.";
    }
  };

  function check(string){
    var arr = string.split(",");
    var arrayLength = arr.length;

    var num_of_empty = 0;
    var total = 0;
    for (var i = 0; i < arrayLength; i++) {
      if (arr[i].trim() == "") {
        //last comma doesn't count
        if (i != arrayLength-1) {
          num_of_empty += 1;
        }
      }else{
        total += 1;
      }
    }
    console.log(num_of_empty);
    var result = [total,num_of_empty];
    return result;
  };

}


})();
