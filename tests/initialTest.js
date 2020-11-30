module.exports = {
    'My first test case'(browser) {
        browser
        .url('https://www.nytimes.com/')
        .waitForElementVisible('.css-1wjnrbv')

    }
}