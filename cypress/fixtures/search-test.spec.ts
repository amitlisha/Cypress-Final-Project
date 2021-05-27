// /// <reference types= "cypress"/>
// import { SearchPage } from '../src/pages/register-login-page';
// import { ResultsPage } from '../src/pages/results-page';

// // ignore uncaught exceptions 
// //   if they are not originating from Cypress,
// //     but from the web app
// Cypress.on('uncaught:exception', (err) => {
//     return false
// })

// describe('Search a term', () => {
//     const srchPg = new SearchPage();
//     it('Open Search Page and Search a term', () => {
//         srchPg.goToPage();
//         cy.fixture('search-info.json').then((mydata) => {
//             cy.log('starting search');
//             srchPg.searchTerm(mydata.termToSearch);
//         })
//     })

//     const rsltPg = new ResultsPage();
//     it('Has at least one results', () => {
//         rsltPg.isAtLeastOneResults();
//     })

// })
