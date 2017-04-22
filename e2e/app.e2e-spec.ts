import { TravelSitePage } from './app.po';

describe('travel-site App', () => {
  let page: TravelSitePage;

  beforeEach(() => {
    page = new TravelSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
