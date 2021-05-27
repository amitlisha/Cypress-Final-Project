/// <reference types= "cypress"/>
import { SearchPage } from '../src/pages/search-page';
import { ResultsPage } from '../src/pages/results-page';
// ignore uncaught exceptions 
//   if they are not originating from Cypress,
//     but from the web app
Cypress.on('uncaught:exception', function (err) {
    return false;
});
describe('Search a term', function () {
    var srchPg = new SearchPage();
    it('Open Search Page and Search a term', function () {
        srchPg.goToPage();
        cy.fixture('search-info.json').then(function (mydata) {
            cy.log('starting search');
            srchPg.searchTerm(mydata.termToSearch);
        });
    });
    var rsltPg = new ResultsPage();
    it('Has at least one results', function () {
        rsltPg.isAtLeastOneResults();
    });
});
