(function () {
"use strict";

angular.module('public')
.service('RegistrationService', RegistrationService);

function RegistrationService() {
  var service = this;
  var user = {};
  user.regCompleted = false;

  service.registerUser = function(regUser, menuItem) {

    user.fName = regUser.user.fName;
    user.lName = regUser.user.lName;
    user.email = regUser.user.email;
    user.phone = regUser.user.phone;
    user.favDish = regUser.user.favDish;
    user.menuItem = menuItem;
    user.regCompleted = true;

  };

  service.getRegUser = function() {
    return user;
  };

}

})();
