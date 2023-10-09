Feature: Página de registro

  Scenario: Preencher os campos do formulário de forma incorreta não permitindo cadastrar um novo usuário e validando mensagens de erro/alerta
    Given I visit the registration page at "https://demo.nopcommerce.com/register?returnUrl=%2F/"
    When I click the "Register" button
    Then I should see the error message "First name is required." associated with the "First Name" field
    And I should see the error message "Last name is required." associated with the "Last Name" field
    And I should see the error message "Email is required." associated with the "Email" field
    And I should see the error message "Password is required." associated with the "Password" field
    And I should see the error message "Password is required." associated with the "Confirm Password" field
