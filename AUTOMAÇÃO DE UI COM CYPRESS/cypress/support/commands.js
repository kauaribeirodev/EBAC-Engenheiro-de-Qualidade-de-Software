// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.get('[name="username"]').type(username);
  cy.get("#password").type(password);
  cy.get('#customer_login [name="login"]').click();
});

Cypress.Commands.add("preCadastro", (email, senha, nome, sobrenome) => {
  cy.get("#reg_email").type(email);
  cy.get("#reg_password").type(senha);
  cy.get('#customer_login [name="register"]').click();

  cy.get(
    "#main li.woocommerce-MyAccount-navigation-link--edit-account a"
  ).click();
  cy.get("#account_first_name").type(nome);
  cy.get("#account_last_name").type(sobrenome);
  cy.get('#main [name="save_account_details"]').click();
});

Cypress.Commands.add("addProducts", (produto, quantidade) => {
  cy.get(".product-block").contains(produto).click();
  cy.get(".button-variable-item-34").click();
  cy.get(".button-variable-item-Black").click();
  cy.get(".input-text").clear().type(quantidade);
  cy.get(".single_add_to_cart_button").click();

  cy.get("#cart").should("contain", quantidade);
});
