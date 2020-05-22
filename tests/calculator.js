
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

    it('subtraction test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('12');
        homepage.enterSecondNumber('5');
        browser.sleep(2000);
        homepage.clickGoButton1();
        homepage.verifyResult('7');
        browser.sleep(2000);
    });

    //another test
    //it('substraction test', function(){


    // });
});