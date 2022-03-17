(function() {
'use strict';

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegistrationService', 'MenuService'];
function RegistrationController (RegistrationService, MenuService) {
  var reg = this;
  reg.completed = false;
  reg.msg = " ";
  reg.showMessage = false;
  reg.showErrMsg = false;

  reg.resetErrMsg = function () {
      reg.showErrMsg = false;
      reg.msg = " ";
  };

  reg.submit = function () {
    var promise = MenuService.getMenuItem(reg.user.favDish);

    promise.then(function (response) {
      RegistrationService.registerUser(reg, response.data);
      reg.msg = "Your information has been saved";
      reg.showMessage = true;
    })
    .catch(function (error) {
      reg.msg = "No such menu number exists";
      reg.completed = false;
      reg.showErrMsg = true;
    })
  };

}

})();
