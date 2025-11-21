
/// <reference types="cypress"/>

describe('Funcionalide: LOGIN',() =>{
    it('Deve fazer login com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('arthuroliveiraribeiro9@gmail.com')
        cy.get('#password').type('123arthur')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, arthuroliveiraribeiro9 (não é arthuroliveiraribeiro9? Sair)')
        
    })
})