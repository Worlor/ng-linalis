import { NgLinalisPage } from './app.po';

describe('ng-linalis App', function() {
  let page: NgLinalisPage;

  beforeEach(() => {
    page = new NgLinalisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
