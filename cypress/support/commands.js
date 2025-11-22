import { faker } from '@faker-js/faker';

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
    //Será digitado usario e senha e depois vai clicar no login 
})

Cypress.Commands.add('cadastro', (email,senha,primeiroNome,ultimoNome)=>{
    cy.get('#reg_email').type(email)
    cy.get('#reg_email').type(senha)
    cy.get('#reg_password').type('teste')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(primeiroNome)
    cy.get('#account_last_name').type(ultimoNome)
    cy.get('.woocommerce-Button').click()
})


Cypress.Commands.add('detalhesDaConta', (primeiroNome,ultimoNome)=>{
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(primeiroNome)
    cy.get('#account_last_name').type(ultimoNome)
    cy.get('.woocommerce-Button').click()
})

