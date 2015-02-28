'use strict';

Homespun.factory('System', function ($resource) {
	'use strict';

	return $resource('/api/system', null, {
        save: { method: 'POST' },
		update: { method: 'PUT' }
	});
});
