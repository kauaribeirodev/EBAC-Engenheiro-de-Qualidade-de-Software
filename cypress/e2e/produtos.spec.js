describe("Funcionalidade Página de produtos", () => {
  beforeEach(() => {
    cy.visit("produtos/");
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get(".product-block")
      //.first()
      //.last()
      //.eq(3)
      .contains("Arcadio Gym Short")
      .click();
  });

  it("Deve selecionar um produto da lista", () => {
    let quantidade = 6;

    cy.get(".product-block").contains("Arcadio Gym Short").click();
    cy.get(".button-variable-item-34").click();
    cy.get(".button-variable-item-Black").click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();

    cy.get("#cart").should("contain", quantidade);
  });

  it("Deve adicinar produtos ao carrinho - Usando Comando customizado", () => {
    cy.addProducts("Arcadio Gym Short", 8);
  });
});
