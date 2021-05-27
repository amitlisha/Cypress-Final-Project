/// <reference types= "cypress"/>

import { BasePage } from './base-page';
import { RegisterLoginPageLocators } from '../locators/register-login-page-locators';

export class RegisterLoginPage extends BasePage {
    constructor() {
        super();
    }

    fillRegisterEmail(email: string) {
        cy.get(RegisterLoginPageLocators.registerEmailField).type(email);
    }
    
    fillRegisterPassword(password: string) {
        cy.get(RegisterLoginPageLocators.registerPasswordField).type(password);
    }

    clickRegisterButton() {
        cy.get(RegisterLoginPageLocators.registerButton).click();
    }
    
    fillLoginEmail(email: string) {
        cy.get(RegisterLoginPageLocators.loginEmailField).type(email);
    }
    
    fillLoginPassword(password: string) {
        cy.get(RegisterLoginPageLocators.loginPasswordField).type(password);
    }

    clickLoginButton() {
        cy.get(RegisterLoginPageLocators.loginButton).click();
    }
}