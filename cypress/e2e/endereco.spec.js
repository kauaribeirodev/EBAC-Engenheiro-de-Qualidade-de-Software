import EnderecoPage from "../support/page-objects/endereco.page";
import { faker } from "@faker-js/faker";

describe("Funcionalidade Endereços - Faturameto e Entrega", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.username, dados.password);
    });
  });
  it("Deve fazer o cadastro de faturamento com sucesso", () => {
    EnderecoPage.editarEnderecoFaturamento(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.person.jobTitle(),
      "Brasil",
      faker.location.streetAddress(),
      faker.number.int({ max: 3 }),
      faker.location.city(),
      "São Paulo",
      "09000000",
      "11900000000",
      faker.internet.email()
    );
  });
  it.only("Deve fazer o cadastro de faturamento com sucesso - Usando Arquivo de dados", () => {
    EnderecoPage.editarEnderecoFaturamento();
  });
});
