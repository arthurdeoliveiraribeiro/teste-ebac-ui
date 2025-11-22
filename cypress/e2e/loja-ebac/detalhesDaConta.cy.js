
/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalide: Detalhes da conta',() =>{

    //antes de cada teste ele vai fazer isso
    beforeEach(()=>{
        cy.visit('minha-conta/edit-account/')
         cy.fixture('perfil').then(login=>{
            cy.login(login.usuario, login.senha)
        })
        
      
    })

    it.only('Deve complentar os detalhes da conta', () =>{
        var primeiroNome = faker.person.firstName()
        var ultimoNome = faker.person.lastName()
        cy.detalhesDaConta(primeiroNome,ultimoNome)
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })

})