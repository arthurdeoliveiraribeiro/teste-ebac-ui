
/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalide: Cadastro',() =>{


    //antes de cada teste ele vai fazer isso
    beforeEach(()=>{
        cy.visit('minha-conta/')
    })

    it('Deve fazer cadastro com sucesso', () =>{
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })

    it('Deve fazer cadastro com sucesso, Usando variaveis', () =>{

        var email =faker.internet.email()
        var primeiroNome = faker.person.firstName()
        var ultimoNome = faker.person.lastName()
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(primeiroNome)
        cy.get('#account_last_name').type(ultimoNome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })

    it.only('Deve fazer cadastro com sucesso, Usando variaveis', () =>{

        var email =faker.internet.email()
        var primeiroNome = faker.person.firstName()
        var ultimoNome = faker.person.lastName()
        cy.cadastro(email,'teste1',primeiroNome,ultimoNome)
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })

})