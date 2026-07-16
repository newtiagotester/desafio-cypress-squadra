import { faker } from '@faker-js/faker'

describe('Product Registration', () => {

    it('Should register a new product successfully', () => {

        const nameProduct = faker.commerce.productName()
        const priceProduct = faker.number.int({ min: 1, max: 1000 })
        const descriptionProduct = faker.commerce.productDescription()
        const quantityProduct = faker.number.int({ min: 1, max: 100 })

         cy.visit('https://front.serverest.dev/login');

        cy.get('[data-testid="email"]').type('fulano@qa.com')
        cy.get('[data-testid="senha"]').type('teste')
        cy.get('[data-testid="entrar"]').click()

        cy.url().should('include', '/home')

        cy.get('[data-testid="cadastrarProdutos"]').click()

        cy.get('[data-testid="nome"]').type(nameProduct)
        cy.get('[data-testid="preco"]').type(priceProduct)
        cy.get('[data-testid="descricao"]').type(descriptionProduct)
        cy.get('[data-testid="quantity"]').type(quantityProduct)
        cy.get('[data-testid="cadastarProdutos"]').click()

        cy.url().should('include', '/listarprodutos')

        cy.contains(nameProduct).should('be.visible')
        cy.contains(priceProduct).should('be.visible')
        cy.contains(descriptionProduct).should('be.visible')
        cy.contains(quantityProduct).should('be.visible')

    })

})