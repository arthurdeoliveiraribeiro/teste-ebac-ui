
/// <reference types="cypress"/>

describe('Funcionalide: LOGIN',() =>{


    //antes de cada teste ele vai fazer isso
    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    //depois de cada teste ele vai fazer isso

    afterEach(()=>{
        cy.screenshot()
    })

    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('arthuroliveiraribeiro9@gmail.com')
        cy.get('#password').type('123arthur')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, arthuroliveiraribeiro9 (não é arthuroliveiraribeiro9? Sair)')
        
    })

    it('Deve exibir mensagem de erro quando selecionar email invalido',() =>{
        cy.get('#username').type('arth1uroliveiraribeiro9@gmail.com')
        cy.get('#password').type('123arthur')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })
    
    it('Deve exibir mensagem de erro quando selecionar senha invalida',()=>{
        cy.get('#username').type('arthuroliveiraribeiro9@gmail.com')
        cy.get('#password').type('1234arthur')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail arthuroliveiraribeiro9@gmail.com está incorreta. Perdeu a senha?')
    })
})