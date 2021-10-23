/// <reference types="cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps"

Given('I visit target home page', () => {
    cy.visit('/')
    cy.wait(4000)
})

Then('Title will appear', () => {
    cy.title().should('contain', 'Target : Expect More. Pay Less.')
})

When('I click search button', () => {
    cy.get('#search').type('{uparrow}')
})
    
And('I type {string}', (Product) => {
    cy.get('#search').click().type(Product)

})

Given('I am in Tagret Home page', () => {
    cy.title().should('contain', 'Target : Expect More. Pay Less.')
})


When('I click categories tab', () => {
    cy.get('.h-margin-l-tight > :nth-child(1)').click()
}) 

Then('I click on Main Menu option', () => {
    cy.contains('Main Menu').click()
}) 

