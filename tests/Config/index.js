//	Domain	URL
var domain = "https://tg.billionapps.net/cll-new-2021/";

// A list of all devices and browsers that will be used in our tests
// ****	START **** //
var devices = {
	tablet: {
		deviceName: 'mobile',
		size: '500x700',
	},
	desktop: {
		deviceName: 'desktop',
		size: '1366x768',
	},
}

var browsers = {
	firefox: {
		browserName: 'firefox',
	},
	chrome: {
		browserName: 'chrome',
	}
}
// ****	END **** //

// TEST-DATA
var TEST_USER = {
    password: "SwVt9o$mzXDjWOCDsHNBOCLx"
};

/*
    Exporting functions to all other tests that will use this script
*/
(function (export) {
    export.devices = devices;
	export.browsers = browsers
    export.TEST_USER = TEST_USER;
	export.domain = domain
})(this);