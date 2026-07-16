import {faker} from '@faker-js/faker';

describe('GET - List Users', () => {

    it('Should list users successfully', () => {

        cy.request({
            method: 'GET',
            url: '/usuarios?nome=Tiago'
        }).then((response) => {

            expect(response.status).to.eq(200);

        });

    });

});
