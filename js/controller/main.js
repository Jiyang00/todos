/**
 * Created by Administrator on 2017/4/7.
 */
(function(angular){
	var controllers = angular.module('app.controllers.main',['app.services.main']);
	controllers.controller('MyController',['$scope','$location','$routeParams','$route','MainService' ,function ($scope,$location,$routeParams,$route, MainService) {
		//文本框输入模型
		$scope.text = '';

		//任务列表输入模型
		//每一个任务的结构 { id:1,text"",complated:"" }
		$scope.todos = MainService.get();

		$scope.add = function () {
			if(!$scope.text){
				return false;
			}
			MainService.add($scope.text)
			$scope.text = '';
		}

		$scope.remove = function (id) {
			MainService.remove(id);
		}


		$scope.clear = function () {
			$scope.todos = MainService.clear();
		}

		$scope.existCompleted = function() {
			for(var i = 0 ; i < $scope.todos.length ; i++) {
				if($scope.todos[i].completed) {
					return true;
				}
			}
			return false;
		}


		$scope.currentEditingId = -1;
		$scope.editing = function(id) {
			$scope.currentEditingId = id;
		}


		$scope.save = function () {
			$scope.currentEditingId = -1;
		}

		$scope.toggleAll = function () {
			MainService.toggleAll();
		}


		$scope.selector = {};
		var status = $routeParams.status;
		switch (status) {
			case 'active':
				$scope.selector = {completed:false};
				break;
			case 'completed':
				$scope.selector = {completed:true};
				break;
			default:
				$route.updateParams({status:''});
				$scope.selector = {};
				break;
		}


		/*window.$loca = $location;
		 $scope.selector = {};
		 $scope.$location = $location;
		 $scope.$watch('$location.path()',function (now , old) {
		 switch(now) {
		 case '/active':
		 $scope.selector = {completed:false};
		 break;
		 case '/completed':
		 $scope.selector = {completed:true};
		 break;
		 default:
		 $scope.selector = {};
		 break;
		 }
		 })*/

		//自定义匹配规则
		$scope.equalCompare = function (source, target) {
			return source === target;
		}
	}])
})(angular)
