/*global Homespun, angular, $ */

Homespun.controller('AlarmsController', ['$scope', '$rootScope', '$http', '$location',
	function alarmsController($scope, $rootScope, $http, $location) {
		'use strict';

		$scope.message = "";
		$('.timer.box').val("00:00");

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

		$rootScope.setAlarm = function (){
			var date = new Date();
			date.setHours($('.timer.box').val().substring(0, 2));
			date.setMinutes($('.timer.box').val().substring(3, 5));
			socket.emit('remote:alarm', {message: $scope.message, time: date});
			$scope.message = "";
			$('.timer.box').val("00:00");
		}
}]);
