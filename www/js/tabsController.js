angular.module('TabsModule', [])
.controller('TabsController', function(){

})
.controller('TaskController', function($scope, $state){
  /* status: A Tiempo
   * status: Retrasada
   * status: Entregada
   */
  var tasks = [
    {id: 0, name: 'Tarea 1', description: 'Hola', beginDate: Date.now(), endDate: Date.now(), status: 'A Tiempo'},
    {id: 1, name: 'Tarea 1', description: 'Hola', beginDate: Date.now(), endDate: Date.now(), status: 'Retrasada'},
    {id: 2, name: 'Tarea 1', description: 'Hola', beginDate: Date.now(), endDate: Date.now(), status: 'Entregada'},
    {id: 3, name: 'Tarea 1', description: 'Hola', beginDate: Date.now(), endDate: Date.now(), status: 'A Tiempo'},

  ]
  $scope.tasks=tasks;
})

.controller('MarketController', function(){

})

.controller('EventController', function(){

});

