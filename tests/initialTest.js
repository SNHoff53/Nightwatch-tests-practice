module.exports = {
    'My first test case'(browser) {
        browser
        .url('https://www.nytimes.com/')
        .waitForElementVisible('css-hnzl8o')
        .assert.containsText("css-hnzl8o", "Today's Paper");
    }
}