describe("Funcionalidade Login", () => {
  beforeEach(() => {
    cy.visit("minha-conta/");
  });

  it("passes", () => {
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
