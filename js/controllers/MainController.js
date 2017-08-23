app.controller ("MainController", ["$scope", function($scope) {
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

  "whiskeys": [
    {
      "name": "single malt",
      "country": "United Kingdom",
      "region": "Speyside, Scotland",
      "brand": "Craigellachie",
      "score": 95,
      "price": 90,
      "vintage": "aged 31 years"
    },
    {
      "name": 'single malt',
      "country": 'Scotland',
      "region": "Napa Valley, California",
      "brand": "Lagavulin",
      "score": 95,
      "price": 90,
      "vintage": "aged 8 years"
    }
  ],

  "teas": [
    {
      "name": "Lao Bang Zhan Xiao Beeng",
      "country": "China",
      "region": "mt. Laobanzhan, Menghai, Xishuangbanna, Yunnan",
      "brand": "Caicheng",
      "score": 85,
      "price": 20,
      "vintage": 2013
    },
    {
      "name": 'Menghai Fang Cha',
      "country": 'China',
      "region": "Menghai, Xishuangbanna, Yunnan",
      "brand": "Menghai",
      "score": 90,
      "price": 50,
      "vintage": 2002
    }
  ],
  }
}]);
