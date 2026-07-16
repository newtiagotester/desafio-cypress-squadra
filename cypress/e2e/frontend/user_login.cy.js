describe('Login', () => {

    it('Should log in a user successfully', () => {

        cy.visit('https://front.serverest.dev')

        cy.get('[data-testid="email"]').type('fulano@qa.com')
        cy.get('[data-testid="senha"]').type('teste')

        cy.get('[data-testid="entrar"]').click()

        cy.url().should('include', '/home')
        cy.contains('Fulano da Silva').should('be.visible')


    })

})