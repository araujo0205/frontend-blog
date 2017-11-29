// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Home defaults': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser.url(devServer).pause(5000);

    defaultTest(browser);
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
  
  'access article': function (browser) {
    browser
    .click('article:first-child a')
    .pause(3000) //waiting to load
  },

  'Article defaults': function (browser) {
    defaultTest(browser);
  },

  'Article content' : function (browser) {
    browser
    .assert.containsText('#center article header','#+Title')
    .assert.containsText('#center article h2:nth-of-type(1)','#+Category')
    .assert.containsText('#center article h2:nth-of-type(2)','#+Tags')
    .assert.containsText('#center article h3:nth-of-type(1)','#+Date')
  },

  'Access categories' : function (browser) {
    browser
    .click('nav li:nth-of-type(2) a')
    .pause(3000)
  },

  'Categories default' : function (browser) {
    defaultTest(browser);
  },

  'Categories content' : function (browser) {
    browser
    .assert.containsText('#center article h2', '/Categorias')
    .assert.containsText('#center article ul', 'desenvolvimento')
  },

  'Access tags' : function (browser) {
    browser
    .click('nav li:nth-of-type(3) a')
    .pause(3000)
  },

  'Tags default' : function (browser) {
    defaultTest(browser);
  },

  'Tags content' : function (browser) {
    browser
    .assert.containsText('#center article h2', '/Tags')
    .assert.containsText('#center article ul', 'algoritmos')
  },

  'end of test' : function (browser) {
    browser.end();
  }
}

function defaultTest(browser) {
  var nav = browser.page.defaultItens().section.nav;
  browser.pause(1000); //waiting to load

  containsNav(nav);

  var aside = browser.page.defaultItens().section.aside;
  browser.pause(1000); //waiting to load

  containsAside(aside);
}
function containsNav(nav) {
  nav
  .assert.containsText('@home', 'Home')
  .assert.containsText('@categorias', 'Categorias')
  .assert.containsText('@tags', 'Tags');
}

function containsAside(aside) {
  aside
  .assert.containsText('@categoriesTitle', '/Categorias')
  .assert.containsText('@categoriesItens','/desenvolvimento')
  .assert.containsText('@tagsTitle', '/tags')
  .assert.containsText('@tagsItens', './algoritmos')
  .assert.containsText('@topTitle', '$top')
  .assert.containsText('@topItens', 'Mongodb no Symfony')
  .assert.containsText('@feed', '/feed')
  .assert.containsText('@socialTitle', '/Social')
  .assert.containsText('@socialItens', './facebook')
}
