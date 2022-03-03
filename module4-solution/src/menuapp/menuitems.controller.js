(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['MenuDataService', 'itemList'];
  function MenuItemsController(MenuDataService, itemList) {
    var items = this;
    items.itemList = itemList.data.menu_items;

  }

})();
