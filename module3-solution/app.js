(function () {
  'use strict';

  angular.module("NarrowItDownApp", [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSearchService", MenuSearchService)
  .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com")
  .directive("foundItems", FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        list: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;

    menu.found = [];

    menu.displayMatchList = function() {
      menu.showEmptyMessage = false;
      menu.showMessage = '';
      
      if (menu.searchTerm) {
        var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

        promise.then(function (foundItems) {
          menu.found = foundItems;
          if (!menu.found.length) {
            menu.showEmptyMessage = true;
            menu.showMessage = "Nothing found!";
          }
        })
        .catch(function (error) {
          console.log("Something went terribly wrong");
        });
      } else {
        menu.showEmptyMessage = true;
        menu.showMessage = "Nothing to search - please enter search term!"
        menu.found = [];
      }
    };

    menu.removeItem = function(itemIndex) {
      menu.found.splice(itemIndex, 1);
    };
  }

  MenuSearchService.$inject = ["$http", "ApiBasePath"];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      })
      .then(function (response) {
        //process response and keep only items that getMatchedMenuItems
        var menuItems = response.data.menu_items;
        var foundItems = [];

        menuItems.forEach(function(item) {
          if (item.description.includes(searchTerm.toLowerCase())) {
            foundItems.push(item);
          }
        })

        //return processed items
        return foundItems;
      });
    };

  }

})();
