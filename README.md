# Examples of setting up testing on a Javascript project

## Unit testing (Jasmine + Karma)
* For setting up [Jasmine](https://jasmine.github.io/) I've used following [yo jasmine generator](https://github.com/yeoman/generator-jasmine#readme)
* For setting up [Karma](https://karma-runner.github.io/2.0/index.html) I've used following [yo karma generator](https://github.com/yeoman/generator-karma#readme)

## Jasmine unit tests
* Configuration file for the HTML runner can be found [here](unit-tests/karma-jasmine_in_chrome/index.html)

## Coverage report with Karma and Istanbul
1. Run the unit test example with coverage:
```npm install;npm test```
2. The [Istanbul](https://istanbul.js.org/) code coverage report will be generated in unit-tests/karma-jasmine_in_chrome/coverage folder

## End to end testing (NightwatchJS or TestCafe)

* Example implementation of testcase with [NightwatchJS](http://nightwatchjs.org/) can be found in the following folder [e2e-tests/nightwatch](e2e-tests/nightwatch)

* Example implementation of testcase with [TestCafe](https://testcafe.devexpress.com/) can be found in the following folder [e2e-tests/testcafe](e2e-tests/testcafe)

* Example implementation of testcase with [Puppeteer](https://github.com/GoogleChrome/puppeteer) can be found in the following folder [e2e-tests/puppeteer](e2e-tests/puppeteer)

* Example implementation of testcase with [CodeceptJS](https://codecept.io/) can be found in the following folder [e2e-tests/codecept](e2e-tests/puppeteer)


## How to run the e2e examples
1. Start the server to have a basic page to run the tests against it:  
```npm install;npm start```
2. Start the NightwatchJS end to end tests:
```cd e2e-tests/nightwatch;npm install;npm test```
3. Start the TestCafe end to end tests:
```cd e2e-tests/testcafe;npm install;npm test```
4. Start TestCafe end to end on a mobile device:
```cd e2e-tests/testcafe;npm install;npm run test-mobile```
5. Start end to end tests with Puppeteer:
```cd e2e-tests/puppeteer;npm install;npm test```
6. Start CodeceptJS end to end tests:
```cd e2e-tests/codecept;npm install;npm run install:drivers;npm run start:selenium;npm test```

### TestCafe further info
* In order to invoke the tests on a specific browsers or on remote browsers have a look on the [package.json](e2e-tests/testcafe/package.json)

### Visual validation
* With visual validation you can create a baseline of images of your application or specific components / elements store them and during testing you generate another set. At the end you will compare the newly generated set with the baseline and you will have an image with the differences. This kind of testing can be use in order to spot the CSS issues as the other types of testing are focused more on functionality.

* In the example that I've implemented together with the Puppeteer example I am using [Resemble](https://github.com/Huddle/Resemble.js) to do the visual difference between the generated images.
The diff image can be found after running the test in the [e2e-tests/puppeteer/output](e2e-tests/puppeteer/output) folder.

### Using random test data
* In some of the test examples I've used a random test data generator called [Faker.js](https://github.com/marak/Faker.js/)