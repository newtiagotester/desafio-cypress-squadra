import { faker } from '@faker-js/faker';

describe('API ServeRest', () => {

    it('POST - Create New User', () => {

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



describe('Login', () => {

    it('POST - User Login', () => {


        cy.request({

            method: 'POST',
            url: '/login',

            body: {
                email: 'fulano@qa.com',
                password: 'teste'
            }

        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body.message)
                .to.eq('Login realizado com sucesso');

            expect(response.body)
                .to.have.property('authorization');

        });

    });

});


describe('User List', () => {

    it('GET - List Users', () => {

        cy.request({
            method: 'GET',
            url: '/usuarios?nome=Tiago'
        }).then((response) => {

            expect(response.status).to.eq(200);

        });

    });

});

        