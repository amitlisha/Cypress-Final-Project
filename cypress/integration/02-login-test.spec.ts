/// <reference types= "cypress"/>
import { RegisterLoginPage } from '../src/pages/register-login-page';
import { RegisterData } from '../src/fixtures/register-data';

// ignore uncaught exceptions 
//   if they are not originating from Cypress,
//     but from the web app
Cypress.on('uncaught:exception', (err) => {
    return false
})

describe('Register', () => {
    const regLogPage = new RegisterLoginPage();

    it('Open Register page and register', () => {
        regLogPage.goToPage();
        regLogPage.openMenu();
        regLogPage.clickMyAccount();

        cy.fixture('register-info.json').then((registerData: RegisterData) => {
            regLogPage.fillLoginEmail(registerData.email);
            regLogPage.fillLoginPassword(registerData.password);
            regLogPage.clickLoginButton();
        })
    })
})
