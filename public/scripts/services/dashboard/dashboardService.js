'use strict';

Homespun.factory('Dashboard', function ($resource) {
	'use strict';

	return $resource('/api/dashboard', null, {
        save: { method: 'POST' },
		update: { method: 'PUT' }
	});
});
