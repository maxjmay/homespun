'use strict';

Homespun.factory('BBC1', function ($resource) {
	'use strict';

	return $resource('/guide/bbcone');
});

Homespun.factory('BBC2', function ($resource) {
	'use strict';

	return $resource('/guide/bbctwo');
});

Homespun.factory('BBC3', function ($resource) {
	'use strict';

	return $resource('/guide/bbcthree');
});
