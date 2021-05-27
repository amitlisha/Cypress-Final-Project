/// <reference types= "cypress"/>

import { BasePage } from './base-page';
import { SportPageLocators } from '../locators/sport-page-locators';

const url = "https://sports.yahoo.com/";

export class SportPage extends BasePage {
    constructor() {
        super( "", url);
    }

    //methods
    returnNBAListOptions() : string[] {
        let allOptions: string[] = [];

        cy.get(SportPageLocators.nbaTabOptionsList).each(option => {
            console.log("ahhhhhh")
            allOptions.push(option.text());
        })

        return allOptions;
    }

    showNbaOptions() {
        cy.get(SportPageLocators.nbaMenuButton).trigger('mouseover');
    }

    // searchTerm(theTermToSearch: string) {
    //     cy.get('#ybar-sbq').type(`${theTermToSearch}{enter}`);
    // }
}