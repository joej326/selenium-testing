import { JoesPage } from './app.po';


//the spec file is where the tests go


describe('selenium App', () => {
  let page: JoesPage;

  beforeEach(() => {
    page = new JoesPage();
  });

  it('should display "this is joe\'s text"', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('this is joe\'s text');
  });

  it('should change the old text to new text', () => {
    page.navigateTo();
    expect(page.changeText()).toEqual('new text');
  });

  it('should fill the input with joseph', () => {
    page.navigateTo();
    expect(page.testInput()).toEqual('joseph');
  });
});
