import { faker } from '@faker-js/faker';

describe('POST - Create New User', () => {

    it('Should create a new user successfully', () => {

        const email = faker.internet.email();


        cy.request({
            method: 'POST',
            url: '/usuarios',
            body: {
                nome: 'Desafio API Squadra',
                email: email,
                password: '123456',
                administrador: 'true'
            }

        }).then((response) => {

            expect(response.status).to.equal(201);
            expect(response.body.message)
                .to.equal('Cadastro realizado com sucesso');

            expect(response.body).to.have.property('_id');

        });

    });

});



