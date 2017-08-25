app.controller("BasketController", ["$scope", "$rootScope", "itemExchange", function($scope, $rootScope, itemExchange) {

  var addItem = function(drinkCategory, newItem) {
      itemList[drinkCategory].push(newItem);
  };

  $scope.dropped = function(dragEl, dropEl) {
    var drag = angular.element(dragEl);
    var drop = angular.element(dropEl);

    // we can use the code below to display the last item dropped into
    // basket
    // var lastInBasket = String($(document.getElementById(dragEl)).text());
    // lastInBasket = "+" + lastInBasket.slice(1, 10) + "...";
    // $scope.lastInBasket = lastInBasket;

  };

  // get items sent to basket with itemExchange shared service
  // which passes data from MainController
  $scope.insideBasket = itemExchange.getItems();

  $scope.restoreItem = function (drinkCategory, index) {
    var restoredItem = $scope.insideBasket[drinkCategory][index];
    $scope.insideBasket[drinkCategory].splice(index, 1);
    // use $broadcast to pass event ("ITEM_RESTORED") and data to MainController
    $rootScope.$broadcast("ITEM_RESTORED", {category: drinkCategory, item: restoredItem});
  }



}]);
