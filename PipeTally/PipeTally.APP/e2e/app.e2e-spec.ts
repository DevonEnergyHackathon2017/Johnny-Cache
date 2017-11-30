import { AppRepositoryPage } from './app.po';

describe('app-repository App', () => {
  let page: AppRepositoryPage;

  beforeEach(() => {
    page = new AppRepositoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
