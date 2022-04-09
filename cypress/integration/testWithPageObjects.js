const { onDatePickerPage } = require("../support/page_objects/datepickerPage")
const { onFormLayoutsPage } = require("../support/page_objects/formLayoutsPage")
const { navigateTo } = require("../support/page_objects/navigationPage")
const { onSmartTablePage } = require("../support/page_objects/smartTablePage")

describe('Test with Page Objects', () => {
    beforeEach('Open application ', () => {
        cy.openHomePage()
    })

    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.toastrPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
    })

    it.only('Should submit Inline and Basic form and select tomorow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Weronika', 'weronika@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('weronika@test.com', 'password')
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)

        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstNameAndLastName('Weronika', 'Marechal')
        onSmartTablePage.updateAgeByFirstName('Weronika', '33')
        onSmartTablePage.deleteRowByIndex(1)
    })
})