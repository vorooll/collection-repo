app.service('itemExchange', function() {

  // TODO: figure out how to get itemList category structure
  // from the structure of MainController $scope.drinks
  var itemList = {
    "wines": [],
    "whiskys": [],
    "teas": []
  };

  var addItem = function(drinkCategory, newItem) {
      itemList[drinkCategory].push(newItem);
  };

  var getItems = function(){
      return itemList;
  };

  return {
    addItem: addItem,
    getItems: getItems
  };

});
