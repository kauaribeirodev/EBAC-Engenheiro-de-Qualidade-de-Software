const perfil = require("../fixtures/perfil.json");

describe("Funcionalidade Login", () => {
  beforeEach(() => {
    cy.visit("minha-conta/");
  });

  it("Deve fazer login com sucesso", () => {
    cy.get('[name="username"]').type("teste@teste123.com");
    cy.get("#password").type("teste@teste123.");
    cy.get('#customer_login [name="login"]').click();

    cy.get(".page-title").should("contain", "Minha conta");
  });

  it("Deve exibir uma mensagem de erro ao inserir senha inválida", () => {
    cy.get('[name="username"]').type("teste@teste123.com");
    cy.get("#password").type("teste@teste123");
    cy.get('#customer_login [name="login"]').click();

    cy.get(".woocommerce-error").should("contain", "Erro: A senha");
  });

  it.only("Deve fazer login com sucesso - Usando fixture", () => {
    cy.fixture("perfil").then((dados) => {
      cy.get('[name="username"]').type(dados.username);
      cy.get("#password").type(dados.password);
      cy.get('#customer_login [name="login"]').click();
    });
  });

  it("Deve fazer login com sucesso - Usando arquivo de dados", () => {
    cy.get('[name="username"]').type(perfil.username);
    cy.get("#password").type(perfil.password);
    cy.get('#customer_login [name="login"]').click();

    cy.get(".page-title").should("contain", "Minha conta");
  });

  it("Deve exibir uma mensagem de erro ao inserir email inválido", () => {
    cy.get('[name="username"]').type("teste@teste123.comm");
    cy.get("#password").type("teste@teste123.");
    cy.get('#customer_login [name="login"]').click();

    cy.get(".woocommerce-error").should(
      "contain",
      "Endereço de e-mail desconhecido"
    );
  });
});
