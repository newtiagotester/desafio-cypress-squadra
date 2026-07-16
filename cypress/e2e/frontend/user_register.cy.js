import {faker} from '@faker-js/faker'

describe('User Registration', () => {

    it('Should register a new user successfully', () => {

        const nome = faker.person.firstName()
        const email = faker.internet.email()
        const password = 'abcd1234'

        cy.visit('https://front.serverest.dev/cadastrarusuarios')

        cy.get('[data-testid="nome"]').type(nome)
        cy.get('[data-testid="email"]').type(email)
        cy.get('[data-testid="password"]').type(password)

        cy.get('[data-testid="checkbox"]').check()

        cy.get('[data-testid="cadastrar"]').click()

        cy.contains('Cadastro realizado com sucesso').should('be.visible')

        cy.url().should('include', '/home')
        cy.contains(`Bem Vindo ${nome}`).should('be.visible')
    })

})



