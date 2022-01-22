# Galen-Framework-Boilerplate-Code

## Run Galen Tests on BrowserStack

Just a few things you should ensure before running Galen tests on BrowserStack:

- First you need to have an account at BrowserStack ([Sign-up](https://www.browserstack.com/users/sign_in)). The free trial gets you access to 100 minutes of BrowserStack Automate with 5 parallel runs which should be enough for you to try out your Galen tests.
- Get your Automate `Username` and `Access Key` from [here](https://www.browserstack.com/accounts/automate), after you login to your account.
- Add these credentials to the test files, to point your tests to BrowserStack's Selenium Hub.

Here are the two kinds of galen tests which you can run on BrowserStack:

#### Galen Specs

Using Galen Specs Language you are able to describe any complex layout including different screen sizes or browsers. It's not only easy to write, it is also easy to read if you are unfamiliar with the language. A list of all capabilities for running tests on various BrowserStack platforms can be found [here](https://www.browserstack.com/automate/capabilities).

Command to execute the Galen Spec test:

```
galen test tests/visual/browserstack.test.js --htmlreport reports/BrowserstackReport  -Dbrowserstack.key=<KEY> -Dbrowserstack.username=<USERNANME>
```

## How to use it

1- Install Galen

```sh
npm install -g galenframework-cli
```

2- check Galen is installed successfully

```sh
galen -v
```

### run the galen test command

```sh
npm run test
```

### runs the BrowserStack test command

```sh
npm run test:browserstack
```

You will find the reports folder created and you can check the report by open "Report.html"

firefox driver download
https://github.com/mozilla/geckodriver/releases

chrome driver download
https://chromedriver.chromium.org/downloads

Galen framework Docker image on docker hub
https://hub.docker.com/r/drginm/galen-cli/