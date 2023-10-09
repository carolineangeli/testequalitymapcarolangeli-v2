describe('Página de registro', () => {
  it('Preencher os campos do formulário de forma incorreta não permitindo cadastrar um novo usuário e validando mensagens de erro/alerta', () => {
    cy.visit('https://demo.nopcommerce.com/register?returnUrl=%2F/');
    cy.contains('button', 'Register').click();

    // Verifica se as mensagens de erro estão associadas aos campos corretos
    cy.get('label[for="FirstName"]').nextAll('span').eq(1).should('have.text', 'First name is required.');
    cy.get('label[for="LastName"]').nextAll('span').eq(1).should('have.text', 'Last name is required.');
    cy.get('label[for="Email"]').nextAll('span').eq(1).should('have.text', 'Email is required.');
    cy.get('label[for="Password"]').nextAll('span').eq(1).should('have.text', 'Password is required.');
    cy.get('label[for="ConfirmPassword"]').nextAll('span').eq(1).should('have.text', 'Password is required.');
  });
});
