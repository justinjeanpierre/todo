// js/controller/main.js

angular.module('todoController', [])

	.controller('mainController', function($scope, $http, Todos) {
		$scope.formData = {};
	
		// get
		// all todos and show them
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
			});
		
		// create
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {
			
			// validate form data
			if (!$.isEmptyObject($scope.formData)) {
				Todos.create($scope.formData)
					.success(function(data) {
						$scope.formData = {};
						$scope.todos = data;
					});
			}
		};
		
		// delete
		// after checking box
		$scope.deleteTodo = function(id) {
			Todos.delete(id)
				.success(function(data) {
					$scope.todos = data;
				});
		};
	});
