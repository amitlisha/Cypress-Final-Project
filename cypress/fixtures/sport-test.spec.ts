// /// <reference types= "cypress"/>
// import { SportPage } from '../src/pages/sport-page';

// Cypress.on('uncaught:exception', (err) => {
//     return false
// })

// describe('Sport nba list test', () => {
//     const sportPage = new SportPage();
//     let nbaOptionsList: string[];

//     it('Open Sport page, hover over nba', () => {
//         sportPage.goToPage();
//         sportPage.clickCookiesAcceptButton();
//         sportPage.showNbaOptions();
//     })

//     it('Print nba List', () => {
//         nbaOptionsList = sportPage.returnNBAListOptions()
//         console.log(nbaOptionsList);
//     })

//     it('Compare and validate nba List', () => {
//         cy.fixture('sport-info.json').then((sportInfoData) => {
//             expect(nbaOptionsList.toString()).to.equal(sportInfoData.nbaListOptions.toString());
//         })
//     })
// })