/* 
* @Author: swgp8054
* @Date:   2015-04-22 15:53:48
* @Last Modified by:   swgp8054
* @Last Modified time: 2015-04-24 11:01:34
*/

/*
describe('google homepage', function() {
 it('should allow the user to make a search', function() 
  { 
  	browser.ignoreSynchronization = true; 
  	browser.driver.get('http://google.fr/'); 
  	browser.driver.findElement(By.css('input[type=text]')).sendKeys('protractor'); // wait for the google search to be done

	browser.driver.sleep(1000); 
	expect(browser.driver.isElementPresent(By.partialLinkText('angular/protractor'))) .toBeTruthy(); 
  });
});
*/


describe('todoListApp homepage', function() { 
	it('should allow the user to add new item', function() { 
		browser.get('http://localhost:3000'); 
		element(by.name('todo')).sendKeys('Internship'); 
		element(by.name('todoDetails')).sendKeys('at 9H00'); 
		element(by.id('addTodo')).click();
		var todoList =  element.all(by.repeater('(key, val) in todos'));
		expect(todoList.last().getText()).toEqual('Internship at 9H00'); 
	});
});