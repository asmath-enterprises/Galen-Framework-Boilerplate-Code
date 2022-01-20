//import pages
load("Pages/LoginPage.js");

// add devices and browsers

var devices = {
  tablet: {
    deviceName: "mobile",
    size: "500x700",
  },
  desktop: {
    deviceName: "desktop",
    size: "1366x768",
  },
};

var browsers = {
  firefox: {
    browserName: "firefox",
  },
};

// run test for all devices and browsers
forAll(devices, function () {
  forAll(browsers, function () {
    test("Test on ${browserName} on ${deviceName}", function (device, browser) {
      // Instantiating the WebDriver
      var driver = createDriver(
        "https://tg.billionapps.net/cll-new-2021/",
        device.size,
        browser.browserName
      );
      var loginPage = null;
      logged("Checking error box", function () {
        loginPage = new LoginPage(driver);
        loginPage.waitForIt();
        loginPage.loginAs("SwVt9o$mzXDjWOCDsHNBOCLx");
        // Checking layout on the page
        checkLayout(driver, "tests/specs/homepage.gspec", device.deviceName);
      });
      // Quiting the browser
      driver.quit();
    });
  });
});
