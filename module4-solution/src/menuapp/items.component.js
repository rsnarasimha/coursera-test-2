(function() {
  'use strict';

  angular.module('Data')
  .component('items', {
    bindings: {
      itemList: '<'
    }
  });

})();
