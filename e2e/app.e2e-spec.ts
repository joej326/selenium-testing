import { JoesPage } from './app.po';



describe('selenium App', () => {
  let page: JoesPage;

  beforeEach(() => {
    page = new JoesPage();
  });

  it('should display "this is joe\'s text"', () => {
    page.navigateTo();
    console.log('heres the log:');
    console.log(page.getTitleText);
    console.log(page);
    expect(page.getTitleText()).toEqual('this is joe\'s text');
  });
});
