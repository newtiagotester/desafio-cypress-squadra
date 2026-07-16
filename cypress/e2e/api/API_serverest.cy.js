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




describe('POST - Create New Product', () => {

    let token;
    let productId;

    before(() => {

        // Realiza login
        cy.request({
            method: 'POST',
            url: '/login',
            body: {
                email: 'fulano@qa.com',
                password: 'teste'
            }
        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('authorization');

            token = response.body.authorization;
        });

    });

    it('Should create a new product successfully', () => {

        const product = {
            nome: faker.commerce.productName(),
            preco: Number(faker.commerce.price({
                min: 100,
                max: 5000,
                dec: 0
            })),
            descricao: faker.commerce.productDescription(),
            quantidade: faker.number.int({
                min: 1,
                max: 100
            })
        };

        cy.request({
            method: 'POST',
            url: '/produtos',
            headers: {
                Authorization: token
            },
            body: product

        }).then((response) => {

            expect(response.status).to.eq(201);
            expect(response.body.message)
                .to.equal('Cadastro realizado com sucesso');

            expect(response.body).to.have.property('_id');

            productId = response.body._id;

            
            cy.request({
                method: 'GET',
                url: `/produtos/${productId}`
            }).then((getResponse) => {

                expect(getResponse.status).to.eq(200);

                expect(getResponse.body.nome)
                    .to.equal(product.nome);

                expect(getResponse.body.preco)
                    .to.equal(product.preco);

                expect(getResponse.body.descricao)
                    .to.equal(product.descricao);

                expect(getResponse.body.quantidade)
                    .to.equal(product.quantidade);

                expect(getResponse.body._id)
                    .to.equal(productId);

            });

        });

    });

});

        