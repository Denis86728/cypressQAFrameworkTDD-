import BasePage from "../../page-objects/pages /basePage";
import HomePage from "../../page-objects/pages /homepage";

const basePage = new BasePage()
const homePage = new HomePage()

beforeEach(() => {
    basePage.navigateToApp("/")    
})

describe('Home Page Tests', () => {
    it('Click on Logo button', () => {
        homePage.getLogoButton().should("be.visible")
        homePage.getLogoButton().click()
        basePage.assertEqualsUrl("https://demoqa.com/")
    });
    // it('Click on Banner button', () => {
    //     homePage.getHomeBannerButton().should("be.visible")
    //     homePage.getHomeBannerButton().click()
        
    // });
});