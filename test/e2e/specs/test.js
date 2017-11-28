// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Home nav': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('nav', 5000)
      .assert.containsText('nav', 'Home')
      .assert.containsText('nav', 'Categorias')
      .assert.containsText('nav', 'Tags')
  },
  
  'Home articles': function (browser) {
    
    browser
    .pause(1000)
    .waitForElementVisible('article:first-child', 5000)
    .assert.containsText('article:first-child h1','#!')
    .assert.containsText('article:first-child h2','extend')
    .assert.containsText('article:first-child h3','implements')
    .assert.containsText('article:first-child a','continuar lendo')
  },
  'Home aside' : function (browser) {
    browser
    .pause(1000)
    .waitForElementVisible('aside', 5000)
    
    .assert.containsText('aside h3','/Categorias')
    .assert.containsText('aside ul','./desenvolvimento')

    .assert.containsText('aside h3:nth-of-type(2)','/tags')
    .assert.containsText('aside ul:nth-of-type(2)','./algoritmos')

    .assert.containsText('aside h3:nth-of-type(3)','$top')
    .assert.containsText('aside ul:nth-of-type(3)','Mongodb no Symfony')

    .assert.containsText('aside h3:nth-of-type(4)','/feed')

    .assert.containsText('aside h3:nth-of-type(5)','/Social')
    .assert.containsText('aside ul:nth-of-type(4)','./facebook')
  },
  'access article': function (browser) {
    browser
    .click('article:first-child a')
    .pause(2000)
    .end()
  }
}
