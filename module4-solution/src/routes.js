(function() {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Setup UI States ***
    $stateProvider

    //Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    //List of All categories
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categories.template.html',
      controller:'MenuCategoriesController as menu',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    //List of All menu items for a category
    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/menuapp/templates/items.template.html',
      controller:'MenuItemsController as items',
      resolve: {
        itemList: ['$stateParams', 'MenuDataService',
                    function ($stateParams, MenuDataService) {
                      return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
  }

})();
