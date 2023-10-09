Feature: Registro de Usuário

  Scenario: Preencher os campos do formulário para cadastrar um novo usuário com sucesso e validar a data de nascimento selecionada
    Given que estou na página de registro
    When preencho os campos do formulário com dados válidos
    Then a data de nascimento selecionada é exibida corretamente
    And clico no botão de registro
    And vejo a mensagem "Your registration completed"
