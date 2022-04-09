const { navigateTo } = require("../support/page_objects/navigationPage")

describe('Test with Page Objects', () => {
    beforeEach('Open application ', () => {
        cy.visit('/')
    })

    it.only('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.toastrPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
    })
})