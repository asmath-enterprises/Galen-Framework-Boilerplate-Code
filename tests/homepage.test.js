//import pages
load('Config/index.js')
load('Pages/LoginPage.js')

// run test for all devices and browsers
forAll(devices, function () {
	forAll(browsers, function () {
		grouped(devices, function () {
			test('Test on ${browserName} on ${deviceName}', function (device, browser) {
				// Instantiating the WebDriver
				var driver = createDriver(
					test_app_url,
					device.size,
					browser.browserName
				)
				//Test code
				var loginPage = null
				logged('Login Page', function () {
					loginPage = new LoginPage(driver)
					loginPage.waitForIt()
					loginPage.loginAs(TEST_USER.password)
					// Checking layout on the page
					checkLayout(driver, 'tests/specs/homepage.gspec', device.deviceName)
				})
				// Quiting the browser
				driver.quit()
			})
		})
	})
})
