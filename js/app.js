(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var myApp = angular.module('MyTodoMvc',[]);
	myApp.controller('MyController',['$scope',function ($scope) {
		//文本框输入模型
		$scope.text = '';

		//任务列表输入模型
		//每一个任务的结构 { id:1,text"",complated:"" }
		$scope.todos = [
			{
				id:0,
				text:"first",
				completed:false
			},
			{
				id:1,
				text:"second",
				completed:false
			},
			{
				id:2,
				text:"third",
				completed:true
			}
		]

		$scope.add = function () {
			if(!$scope.text){
				return false;
			}
			$scope.todos.push(
				{
					id:$scope.length,
					text:$scope.text,
					completed:false
				}
			)
			$scope.text = '';
		}

		$scope.remove = function (id) {
			$scope.todos.splice(id,1)
		}


		$scope.clear = function () {
			var clearArr = [];
			$scope.todos.forEach(function (value,index) {
				if(value.completed === false) {
					clearArr.push(value);
				}
			});
			$scope.todos = clearArr;
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

		var now = true;
		$scope.toggleAll = function () {
			for(var i = 0 ; i < $scope.todos.length ; i++) {
				$scope.todos[i].completed = now;
			}
			now = !now;
		}
	}])

})(angular);
