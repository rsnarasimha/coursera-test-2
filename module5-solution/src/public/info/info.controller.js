(function() {
'use strict';

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['RegistrationService', 'regUser', 'ApiPath'];
function InfoController (RegistrationService, regUser, ApiPath) {
  var info = this;
  info.basePath = ApiPath;
  info.regUser = regUser;
}

})();
