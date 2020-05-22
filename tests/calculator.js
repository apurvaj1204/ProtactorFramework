
let homepage = require('../pages/homepage')
describe('Demo calculator tests', function () {

    it('addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('2');
        homepage.enterSecondNumber('5');
        browser.sleep(2000);
        homepage.clickGoButton();
        homepage.verifyResult('7');
        browser.sleep(2000);
    });

});