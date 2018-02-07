# Examples of setting up testing on Javascript project

## Unit testing (Jasmine + Karma)
* For setting up [Jasmine](https://jasmine.github.io/) I've used following [yo jasmine generator](https://github.com/yeoman/generator-jasmine#readme)
* For setting up [Karma](https://karma-runner.github.io/2.0/index.html) I've used following [yo karma generator](https://github.com/yeoman/generator-karma#readme)

## Jasmine unit tests
* Configuration file for the HTML runner can be found [here](test/index.html)

## Coverage report with Karma and Istanbul
1. Run the unit test example with coverage:
```npm test```
2. The report will be generated in test/coverage folder

## End to end testing (NightwatchJS or TestCafe)

* Example implementation of testcase with [NightwatchJS](http://nightwatchjs.org/) can be found in the following folder [e2e/nightwatch](e2e/nightwatch)

* Example implementation of testcase with [TestCafe](https://testcafe.devexpress.com/) can be found in the following folder [e2e/testcafe](e2e/testcafe)


## How to run the e2e examples
1. Start the server to have a basic page to run the tests against it:  
```npm start```
2. Start the NightwatchJS end to end tests:  
```cd e2e/nightwatch;npm test```
3. Start the TestCafe end to end tests:  
```cd e2e/testcafe;npm test```

### TestCafe further info
* In order to invoke the tests on a specific browsers or on remote browsers have a look on the [package.json](e2e/testcafe/package.json)