describe("Teste da Funcionalidade Produtos", () => {
  it("Listar Produtos", () => {
    cy.request({
      method: "GET",
      url: "produtos",
    }).then((response) => {
      expect(response.body.produtos[1].nome).to.equal("Logitech MXs");
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("produtos");
      expect(response.duration).to.be.lessThan(21);
    });
  });

  it("Cadastrar Produto", () => {
    cy.request({
      method: "POST",
      url: "produtos",
      body: {
        nome: "Produto Teste",
        // Criar produto dinamicamente
        preco: 109,
        descricao: "Produto de Teste",
        quantidade: 2,
      },
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzYyOTU3NzA0LCJleHAiOjE3NjI5NTgzMDR9.hCjjSa8AVLcBSdY2NQxVx4lsRG4KLBgqmYIg2DuDAYU",
        //Gerar token dinamicamente
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal("Cadastro realizado com sucesso");
    });
  });
});
