/**
 * Created by Administrator on 2017/4/7.
 */
(function (angular) {
	var services = angular.module('app.services.main',[]);
	services.service('MainService',[function () {
		var todos = [
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


		this.get = function () {
			return todos;
		}

		this.add = function (text) {
			todos.push(
				{
					id:todos.length,
					text:text,
					completed:false
				}
			)
		}
		this.remove = function (id) {
			todos.splice(id,1);
		}

		this.clear = function () {
			var clearArr = [];
			todos.forEach(function (value,index) {
				if(value.completed === false) {
					clearArr.push(value);
				}
			});
			todos = clearArr;
			return todos;
		}

		var now = true;
		this.toggleAll = function () {
			for(var i = 0 ; i < todos.length ; i++) {
				todos[i].completed = now;
			}
			now = !now;
		}
	}])
})(angular)
