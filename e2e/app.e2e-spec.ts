import { UnsaidtalksPage } from './app.po';

describe('unsaidtalks App', () => {
  let page: UnsaidtalksPage;

  beforeEach(() => {
    page = new UnsaidtalksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
