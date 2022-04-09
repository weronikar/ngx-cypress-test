///< reference types="cypress" />
describe('Our first suite', () => {
    it('first test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //by Tag name
        cy.get('input')
        //by id #
        cy.get('#inputEmail1')
        //by class name .
        cy.get('.input-full-width')
        // by attribute name
        cy.get('[placeholder]')
        //by attr name & value
        cy.get('[placeholder="Email"]')
        //by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
        // tag name & attr value
        cy.get('input[placeholder="Email"]')

        //2 different attr
        cy.get('[placeholder="Email"][type="email"]')

        //tag name attr with value id & class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //The most recommended way:
        cy.get('[data-cy="imputEmail1"]')
    })

    it.only('Second test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]')
        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()

        cy.contains('nb-card', 'Horizontal form')
            .find('[type="email"]')
    })
})