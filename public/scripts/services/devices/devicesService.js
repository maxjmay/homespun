'use strict';

Homespun.factory('Devices', function ($resource) {
	'use strict';

	return $resource('/api/devices', null, {
        save: { method: 'POST' },
		update: { method: 'PUT' }
	});
});

Homespun.factory('Device', function ($resource) {
	'use strict';

	return $resource('/api/devices/:deviceId', null, {
        save: { method: 'POST', params: {deviceId: '@deviceId'} },
		update: { method: 'PUT', params: {deviceId: '@deviceId'} }
	});
});
