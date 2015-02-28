'use strict';

Homespun.factory('Channels', function ($resource) {
	'use strict';

	return $resource('/api/channels', null, {
        save: { method: 'POST' },
		update: { method: 'PUT' }
	});
});

Homespun.factory('Channel', function ($resource) {
	'use strict';

	return $resource('/api/channels/:channelId', null, {
        save: { method: 'POST', params: {channelId: '@channelId'} },
		update: { method: 'PUT', params: {channelId: '@channelId'} }
	});
});
