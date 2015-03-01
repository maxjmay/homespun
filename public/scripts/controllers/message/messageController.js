/*global Homespun, angular, $ */

Homespun.controller('MessageController', ['$scope', '$rootScope', '$http', '$location',
	function messageController($scope, $rootScope, $http, $location) {
		'use strict';

		$scope.title = "";
		$scope.message = "";

		if ($location.path() == '/dashboard') {
			$rootScope.allFalse();
			$rootScope.dashboard = true;
		} else if ($location.path().substring(0, 8) == '/devices' || $location.path() == '/') {
			$rootScope.allFalse();
			$rootScope.devices = true;
		} else if ($location.path() == '/channels') {
			$rootScope.allFalse();
			$rootScope.channels = true;
		} else if ($location.path() == '/social') {
			$rootScope.allFalse();
			$rootScope.social = true;
		} else if ($location.path() == '/message') {
			$rootScope.allFalse();
			$rootScope.message = true;
		} else if ($location.path() == '/alarms') {
			$rootScope.allFalse();
			$rootScope.alarms = true;
		}  else if ($location.path() == '/timers') {
			$rootScope.allFalse();
			$rootScope.timers = true;
		}  else if ($location.path() == '/system') {
			$rootScope.allFalse();
			$rootScope.system = true;
		}

		$scope.displayMessage = function () {
			socket.emit('remote:message', {title: $scope.title, message: $scope.message});
		}
}]);
