// app.po.ts
import { browser, element, by } from 'protractor';

// Our Page Object Class is a Class that describes a high level page view. 
// This one is our Page Object describing our home page. 
// The Page Object Class has all of the logic to find the elements on our page 
// and how to navigate to the URL. This Page Object finds our home page heading. 
// We use the Protractor by.css() function to select elements on the page. 
// There are many ways to select elements but for now we will just use the by.css(). 


export class JoesPage {
  navigateTo() {
    // Navigate to the home page of the app
    return browser.get('/');
  }

  getTitleText() {
    // Get the home page heading element reference
    return element(by.id('hello')).getText();
  }

  changeText(){
    element(by.tagName('button')).click();
    return element(by.id('dynamic-text')).getText();
  }
  testInput(){
    element(by.tagName('input')).sendKeys('joseph');
    return element(by.tagName('input')).getAttribute('value');
  }
}