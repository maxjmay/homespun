/*global Homespun, angular, $ */

Homespun.controller('DevicesController', ['$scope', '$rootScope', '$http', '$location',
	function devicesController($scope, $rootScope, $http, $location) {
		'use strict';

		if ($location.path() == '/dashboard' || $location.path() == '/') {
			$rootScope.allFalse();
			$rootScope.dashboard = true;
		} else if ($location.path().substring(0, 8) == '/devices') {
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


		$scope.reloadAll = function () {
			socket.emit('remote:reload');
		}

}]);
