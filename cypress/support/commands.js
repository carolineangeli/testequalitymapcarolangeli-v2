import 'cypress-xpath';

const faker = require('faker');

Cypress.Commands.add('preencherFormularioRegistro', () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const birthDay = faker.datatype.number({ min: 1, max: 31 }).toString();
  const birthMonth = faker.datatype.number({ min: 1, max: 12 }).toString();
  const birthYear = faker.datatype.number({ min: 1913, max: 2023 }).toString();
  const email = faker.internet.email();
  const company = faker.company.companyName();
  const password = faker.internet.password();

  cy.visit('https://demo.nopcommerce.com/');
  cy.contains('a', 'Register').click();
  cy.xpath('//input[@id="gender-female"]').check();
  cy.xpath('//input[@id="FirstName"]').type(firstName);
  cy.xpath('//input[@id="LastName"]').type(lastName);
  cy.get('select[name="DateOfBirthDay"]').select(birthDay);
  cy.get('select[name="DateOfBirthMonth"]').select(birthMonth);
  cy.get('select[name="DateOfBirthYear"]').select(birthYear);

  cy.validarDataSelecionada({ birthDay, birthMonth, birthYear });

  cy.xpath('//input[@id="Email"]').type(email);
  cy.xpath('//input[@id="Company"]').type(company);
  cy.xpath('//input[@id="Newsletter"]').check();
  cy.xpath('//input[@id="Password"]').type(password);
  cy.xpath('//input[@id="ConfirmPassword"]').type(password);
  cy.contains('button', 'Register').click();
  cy.xpath('//div[text()="Your registration completed"]').should('be.visible');
});

Cypress.Commands.add('validarDataSelecionada', (dadosUsuario) => {
  cy.get('select[name="DateOfBirthDay"]').should('have.value', dadosUsuario.birthDay);
  cy.get('select[name="DateOfBirthMonth"]').should('have.value', dadosUsuario.birthMonth);
  cy.get('select[name="DateOfBirthYear"]').should('have.value', dadosUsuario.birthYear);
});