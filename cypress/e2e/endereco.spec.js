describe("Funcionalidade Endereços - Faturameto e Entrega", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.username, dados.password);
    });
  });
  it("Deve fazer o cadastro de faturamento com sucesso", () => {});
});
