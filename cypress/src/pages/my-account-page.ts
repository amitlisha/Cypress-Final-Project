/// <reference types= "cypress"/>

import { BasePage } from './base-page';
import { MyAccountPageLocators } from '../locators/my-account-page-locators';

export class MyAccountPage extends BasePage {
    constructor() {
        super();
    }

    clickSignOutButton() {
        cy.get(MyAccountPageLocators.signOutButton).click();
    }
}