import { MyMealPage } from './app.po';

describe('my-meal App', () => {
  let page: MyMealPage;

  beforeEach(() => {
    page = new MyMealPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
