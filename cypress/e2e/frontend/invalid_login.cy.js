describe('Invalid Login', () => {

    it('Should display an error message for invalid credentials', () => {

        cy.visit('https://front.serverest.dev')

        cy.get('[data-testid="email"]').type('tiago@teste.com.br')
        cy.get('[data-testid="senha"]').type('invalid-password')

        cy.get('[data-testid="entrar"]').click()

        cy.contains('Email e/ou senha inválidos').should('be.visible')


    })

})