
/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalide: Cadastro',() =>{


    //antes de cada teste ele vai fazer isso
    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })

    it('Deve selecionar o  primeiro produto da lista', () =>{
       cy.get('.block-inner')
        .first()
        .click()
    })

    it('Deve selecionar o ultimo produto da lista', () =>{
       cy.get('.block-inner')
        .last()
        .click()
    })

     it.only('Deve selecionar um produto especifico da lista', () =>{
       cy.get('.block-inner')
        .eq(1)
        .click()
        cy.get('#tab-title-description > a').should('contain','Descrição')
    })

   
})