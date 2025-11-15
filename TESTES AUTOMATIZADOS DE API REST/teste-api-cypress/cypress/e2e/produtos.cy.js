describe("Teste da Funcionalidade Produtos", () => {
  let token;
  before(() => {
    cy.token("fulano@qa.com", "teste").then((tkn) => {
      token = tkn;
    });
  });

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
    let produto = `Produto Teste ${Math.floor(Math.random() * 100)}`;
    cy.request({
      method: "POST",
      url: "produtos",
      body: {
        nome: produto,
        preco: 109,
        descricao: "Produto de Teste",
        quantidade: 2,
      },
      headers: {
        authorization: token,
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal("Cadastro realizado com sucesso");
    });
  });

  it("Deve validar mensagem de erro ao cadastrar produto repetido", () => {
    cy.cadastrarProduto(
      token,
      "Produto Teste 1",
      110,
      "produto de teste",
      5
    ).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.message).to.equal("Já existe produto com esse nome");
    });
  });
});
