import { faker } from '@faker-js/faker';


describe('Funcionalidade Pré Cadastro', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Deve completar o pré cadastro com sucesso', () => {
    cy.get('#reg_email').type(faker.internet.email());
    cy.get('#reg_password').type('senha@testeemail');
    cy.get('#customer_login [name="register"]').click();

    cy.get('#main li.woocommerce-MyAccount-navigation-link--edit-account a').click();
    cy.get('#account_first_name').type(faker.person.firstName());
    cy.get('#account_last_name').type(faker.person.lastName());
    cy.get('#main [name="save_account_details"]').click();

    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
  })
})