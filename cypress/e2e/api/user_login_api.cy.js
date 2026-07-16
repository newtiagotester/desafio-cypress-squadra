import {faker} from '@faker-js/faker';

describe('POST - User Login', () => {

    it('Should login a user successfully', () => {


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
