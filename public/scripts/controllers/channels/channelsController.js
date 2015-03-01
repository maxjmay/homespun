/*global Homespun, angular, $ */

Homespun.controller('ChannelsController', ['$scope', '$rootScope', '$http', '$location', 'BBC1', 'BBC2', 'BBC3',
	function channelsController($scope, $rootScope, $http, $location, BBC1, BBC2, BBC3) {
		'use strict';

		$scope.bbc1 = BBC1.get({}, function () {});
		$scope.bbc2 = BBC2.get({}, function () {});
		$scope.bbc3 = BBC3.get({}, function () {});

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

		$scope.changeChannel = function (url) {
			socket.emit('remote:play', {url:url});
		}
}]);
