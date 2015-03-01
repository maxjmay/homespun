'use strict';
/**
 * The main backup app module
 *
 * @type {angular.Module}
 */
var Homespun = angular.module('HomespunApp', ['ngRoute', 'LocalStorageModule', 'ngResource']);

angular.module('HomespunApp').directive('ngEnter', function () {
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
			if (event.which === 13) {
				scope.$apply(function () {
					scope.$eval(attrs.ngEnter, {
						'event': event
					});
				});

				event.preventDefault();
			}
		});
	};
});

Homespun.config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'views/devices',
			controller: 'DevicesController'
		}).
		when('/dashboard', {
			templateUrl: 'views/devices',
			controller: 'DevicesController'
		}).
		when('/devices', {
			templateUrl: 'views/devices',
			controller: 'DevicesController'
		}).
		when('/device/:id', {
			templateUrl: 'views/devices/device',
			controller: 'DevicesController'
		}).
		when('/device/:id/remote', {
			templateUrl: 'views/devices/remote',
			controller: 'DevicesController'
		}).
		when('/channels', {
			templateUrl: 'views/channels',
			controller: 'ChannelsController'
		}).
		when('/channel/:id', {
			templateUrl: 'views/channels/channel',
			controller: 'ChannelsController'
		}).
		when('/social', {
			templateUrl: 'views/social',
			controller: 'SocialController'
		}).
		when('/message', {
			templateUrl: 'views/message',
			controller: 'MessageController'
		}).
		when('/timers', {
			templateUrl: 'views/timers',
			controller: 'TimersController'
		}).
		when('/alarms', {
			templateUrl: 'views/alarms',
			controller: 'AlarmsController'
		}).
		when('/system', {
			templateUrl: 'views/system',
			controller: 'SystemController'
		});

		$locationProvider.html5Mode(true);
		$locationProvider.hashPrefix('!');
	}
]);
