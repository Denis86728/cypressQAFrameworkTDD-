import BasePage from "./basePage";

const Locators = {
    logoButton: "header > a ",
    homeBannerButton: ".home-banner > a", 
    cardButton: ".card.mt-4.top-card",
    footerDescription: "footer > span"
}

export default class HomePage extends BasePage{
    getLogoButton(){
        return cy.get(Locators.logoButton)
    }
    getHomeBannerButton(){
        return cy.get(Locators.homeBannerButton)
    }
    getCardButton(cardNumber){
        return cy.get(Locators.cardButton + `:nth-child(${cardNumber})`)
    }
    getFooterDescription(){
        return cy.get(Locators.footerDescription)
    }
}