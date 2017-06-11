import { MysecondprojectPage } from './app.po';

describe('mysecondproject App', () => {
  let page: MysecondprojectPage;

  beforeEach(() => {
    page = new MysecondprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
