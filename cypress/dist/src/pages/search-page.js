/// <reference types= "cypress"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BasePage } from './base-page';
var SearchPage = /** @class */ (function (_super) {
    __extends(SearchPage, _super);
    function SearchPage() {
        return _super.call(this) || this;
    }
    SearchPage.prototype.searchTerm = function (theTermToSearch) {
        cy.get('#ybar-sbq').type(theTermToSearch + "{enter}");
    };
    return SearchPage;
}(BasePage));
export { SearchPage };
