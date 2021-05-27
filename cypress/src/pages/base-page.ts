/// <reference types= "cypress"/>

import { BasePageLocators } from '../locators/base-page-locators';

export class BasePage {
    private pageUrlPath: string;
    private fullUrl: string;

    constructor(pageUrlPath: string = "", overrideUrl?: string) {
        this.pageUrlPath = pageUrlPath;
        if(overrideUrl === undefined) {
            this.fullUrl = Cypress.config().baseUrl + pageUrlPath;
        }
        else {
            this.fullUrl = overrideUrl;
        }
    }

    goToPage() {
        cy.visit(this.fullUrl);
    }

    openMenu() {
        cy.get(BasePageLocators.menuButton).click();
    }

    clickMyAccount() {
        cy.get(BasePageLocators.myAccountButton).click();
    }
}