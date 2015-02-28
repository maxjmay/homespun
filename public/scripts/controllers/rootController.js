/*global Homespun, angular, $, md5 */

Homespun.controller('RootController', ['$scope', '$rootScope', '$http', '$location', 'Storage',
	function rootController($scope, $rootScope, $http, $location, Storage) {
		// If user is signed in then redirect back home
		'use strict';

		$rootScope.dashboard = false;
		$rootScope.devices = false;
		$rootScope.channels = false;
		$rootScope.social = false;
		$rootScope.message = false;
		$rootScope.timers = false;
		$rootScope.alarms = false;
		$rootScope.system = false;

		$rootScope.allFalse = function() {
			$rootScope.dashboard = false;
			$rootScope.devices = false;
			$rootScope.channels = false;
			$rootScope.social = false;
			$rootScope.message = false;
			$rootScope.timers = false;
			$rootScope.alarms = false;
			$rootScope.system = false;
		}


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

	}]);
