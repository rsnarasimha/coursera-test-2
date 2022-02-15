(function(){
  'use strict';

  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  //buyList controller - ToBuyController
  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService){
    var buyList = this;

    buyList.items = ShoppingListCheckOffService.getItems();

    buyList.moveItem = function (itemIndex){
      ShoppingListCheckOffService.moveItem(itemIndex);
    };
  }

  //boughtList controller - AlreadyBoughtController
  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService(){
    var service = this;

    //List of to buy shopping items
    var items = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Bagels",
        quantity: "5"
      },
      {
        name: "Cookies",
        quantity: "10"
      },
      {
        name: "Donuts",
        quantity: "12"
      },
      {
        name: "Chocolates",
        quantity: "20"
      }
    ];

    //list of bought getItems
    var boughtItems = [];

    //move items from buyList to boughtList
    service.moveItem = function(itemIndex) {
      boughtItems.push(items[itemIndex]);
      items.splice(itemIndex, 1);
    };

    //get the to buy shopping list
    service.getItems = function() {
      return items;
    };

    //get the bought shopping List
    service.getBoughtItems = function() {
      return boughtItems;
    }
  }

})();
