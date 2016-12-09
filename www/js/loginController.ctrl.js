angular.module('LoginModule', [])
.controller('LoginController', function ($scope, $state) {
  $scope.init = function(){
    $state.go('tab.task');
  }
})
  .controller('RegisterController', function(){

});
