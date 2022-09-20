const assert = require('assert')
const { Given, When, Then } = require('cucumber')

// Adição do drive
const path = require('path')
const { ServiceBuilder } = require('selenium-webdriver/chrome')
const { Builder, By, Key, until } = require('selenium-webdriver')

// Configurtar de acordo com o sistema operacional usando o comando do terminal "pwd"
const pathDriver = "/home/servidor/Área de Trabalho/tdd_bdd_jasmine_cucumber/driver/chromedriver"
const serviceBuilder = new ServiceBuilder(pathDriver)

const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build() 

Given('I\'m have {string} clients in my database', function (string) {
 console.log("Inseri os dados na base")
});

When('I access the home webpage', async function() {
  driver.get('http://localhost:3000/')
  await driver.sleep(1000)
});

Then('see the list of {string} itens', async function (string) {
  // Os elementos serão colocados dentro de uma tabela usando o <tr>
  // Desta forma será contado quantos "<tr>" tem na tabela que deve ser igual a 10.
  // let qtd = await driver.findElements(By.tagName('tr'))
  let qtd = await driver.findElements(By.css('tbody tr'))
  assert.equal(qtd.length, parseInt(string))
  await driver.quit()
});

