//	Domain	URL
var test_app_url = "https://tg.billionapps.net/cll-new-2021/";

// A list of all devices and browsers that will be used in our tests
// ****	START **** //
var devices = {
	 mobile:{
        deviceName: "mobile",
        size: "360x640",
        tags: ["mobile"]
    },
    tablet:{
        deviceName: "tablet",
        size: "600x800",
        tags: ["tablet"]
    },
    desktop:{
        deviceName: "desktop",
        size: "1900x1080",
        tags: ["desktop"]
    }
}

var browsers = {
	firefox: {
		browserName: 'firefox',
	},
	chrome: {
		browserName: 'chrome',
	},
	edge: {
		browserName: 'edge',
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
	export.test_app_url = test_app_url
})(this);