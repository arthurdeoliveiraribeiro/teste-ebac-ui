
/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalide: Cadastro',() =>{


    //antes de cada teste ele vai fazer isso
    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('Deve fazer cadastro com sucesso', () =>{
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
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
})