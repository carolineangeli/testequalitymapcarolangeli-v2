const faker = require('faker');

describe('Página de registro', () => {
  it('Preencher os campos do formulário para cadastrar um novo usuário com sucesso.', () => {

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const birthDay = faker.datatype.number({ min: 1, max: 31 }).toString();
    const birthMonth = faker.datatype.number({ min: 1, max: 12 }).toString();
    const birthYear = faker.datatype.number({ min: 1913, max: 2023 }).toString();
    const email = faker.internet.email();
    const company = faker.company.companyName();
    const password = faker.internet.password();

    const dadosUsuario = {
      firstName,
      lastName,
      birthDay,
      birthMonth,
      birthYear,
      email,
      company,
      password,
    };

    cy.preencherFormularioRegistro(dadosUsuario);
  });
});