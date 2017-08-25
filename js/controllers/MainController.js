app.controller ("MainController", ["$scope", "$rootScope", "itemExchange", function($scope, $rootScope, itemExchange) {

  $scope.drinks = {

    "wines": [
    {
      "name": "Cabernet Sauvignon Napa Valley",
      "country": "USA",
      "region": "Napa Valley, California",
      "brand": "Lewis",
      "score": 95,
      "price": 90,
      "vintage": 2013
    },
    {
      "name": "Chardonnay Dundee Hills Evenstad Reserve",
      "country": "USA",
      "region": "Willamette Valley, Oregon",
      "brand": "Domaine Serene",
      "score": 95,
      "price": 55,
      "vintage": 2014
    },
    {
      "name": "Pinot Noir Ribbon Ridge The Beaux Frères",
      "country": "USA",
      "region": "Willamette Valley, Oregon",
      "brand": "Beaux Frères",
      "score": 95,
      "price": 90,
      "vintage": 2014
    },
    {
      "name": "Barsac",
      "country": "France",
      "region": "Barsac, Bordeaux",
      "brand": "Château Climens",
      "score": 97,
      "price": 68,
      "vintage": 2013
    },
    {
      "name": "Barbaresco Asili Riserva",
      "country": "Italy",
      "region": "Piedmont",
      "brand": "Produttori del Barbaresco",
      "score": 96,
      "price": 59,
      "vintage": 2011
    }
  ],

  "whiskys": [
    {
      "name": "Single Malt",
      "country": "United Kingdom",
      "region": "Speyside, Scotland",
      "brand": "Craigellachie",
      "score": 95,
      "price": 1050,
      "vintage": "31 years old"
    },
    {
      "name": "Single Malt",
      "country": "United Kingdom",
      "region": "Islay, Schotland",
      "brand": "Lagavulin",
      "score": 90,
      "price": 62,
      "vintage": "16 years old"
    },
    {
      "name": "The Original",
      "country": "United Kingdom",
      "region": "Highland, Schotland",
      "brand": "Glenmorangie",
      "score": 87,
      "price": 39,
      "vintage": "10 years old"
    },
    {
      "name": "Hibiki",
      "country": "Japan",
      "region": "Japan",
      "brand": "Suntory",
      "score": 92,
      "price": 295,
      "vintage": "17 years old"
    }
  ],

  "teas": [
    {
      "name": "Lao Bang Zhan Xiao Beeng",
      "country": "China",
      "region": "mt. Laobanzhan, Menghai, Xishuangbanna, Yunnan",
      "brand": "Caicheng",
      "score": 82,
      "price": 25,
      "vintage": 2013
    },
    {
      "name": "La Shui Dong Yi Wu Beeng",
      "country": "China",
      "region": "mt. Lashuidong, Yiwu, Mengla, Xishuangbanna, Yunnan",
      "brand": "Caicheng",
      "score": 78,
      "price": 35,
      "vintage": 2011
    },
    {
      "name": "Menghai Fang Cha",
      "country": "China",
      "region": "Menghai, Xishuangbanna, Yunnan",
      "brand": "Menghai",
      "score": 90,
      "price": 155,
      "vintage": 2002
    },
    {
      "name": "Te Beeng Cha (Iron Cake) 8653",
      "country": "China",
      "region": "Dali, Yunnan",
      "brand": "Xiaguan",
      "score": 90,
      "price": 350,
      "vintage": 2003
    }
  ],
  };

  // in case we would like to add "add to basket" buttons
  // the solution is coded in the block below (checked and working)
  // here's html for the button :
  // <button ng-click="addToBasket($parent.drinkCategory, $index)">
  // add to basket </button>
  // and here's the corresponding Angular code :
  // $scope.addToBasket = function (drinkCategory, index) {
  //      var itemToBasket = $scope.drinks[drinkCategory][index];
  //      itemExchange.addItem(drinkCategory, itemToBasket);
  //      // splice must go after addItem because splice changes the array length
  //      $scope.drinks[drinkCategory].splice(index, 1);
  // };
  // end of "add to basket"

  $rootScope.$on("LVL-DROP", function (event, args) {
      var drinkCategoryIndex = args.category;
      // retrieve category name from a category index
      var drinkCategory = Object.keys($scope.drinks)[drinkCategoryIndex];
      var index = args.item;
      console.log(drinkCategory, index);
      var itemToBasket = $scope.drinks[drinkCategory][index];
      itemExchange.addItem(drinkCategory, itemToBasket);
      // splice must go after addItem because splice changes the array length
      // I had to use $scope.$apply since otherwise DOM didn't updated
      $scope.$apply(function() {
        $scope.drinks[drinkCategory].splice(index, 1);
      });
  });

  // restore item from basket into original scope
  // when user clicks "restore" in basket, implemented via
  // $broadcast service
  $scope.$on("ITEM_RESTORED", function(event, args) {
        var drinkCategory = args.category;
        var restoredItem = args.item;
        $scope.drinks[drinkCategory].push(restoredItem);
  });

}]);
