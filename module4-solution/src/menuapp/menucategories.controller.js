(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MenuCategoriesController', MenuCategoriesController);

  MenuCategoriesController.$inject = ['MenuDataService', 'categories'];
  function MenuCategoriesController(MenuDataService, categories) {
    var menu = this;
    menu.categories = categories.data;

  }

})();
