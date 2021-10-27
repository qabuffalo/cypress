/// <reference types= "cypress" /> 
import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"
import { target } from "/Users/asadzaman/Documents/GitHub/cypress/cypress/integration/pages/target.js"

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

Given('I am in Target Home page', () => {
    cy.title().should('contain', 'Target : Expect More. Pay Less.')
    cy.wait(4000)
})


When('I click categories tab', () => {
    cy.get('.h-margin-l-tight > :nth-child(1)').click()
}) 

Then('I click on Main Menu option', () => {
    cy.contains('Main Menu').click()
}) 

When('I click the login icon', () => {
    cy.get(target.Account).click()
})

And('I click on Sign-in button', () => {
    cy.get(target.Sign_In).click()
})



Then('I will be taken to the Sign-in page', () => {
    cy.title().should('contain', 'Login: Target')
})

Given('User is on Sign-in page', () => {
    cy.title().should('contain', 'Login: Target')
    cy.wait(2000)

})

When('User enters {string}', (username) => {
    cy.get(target.Username).type(username)
})

And('User enters {string}', (password) => {
    cy.get(target.Password).type(password)
})

Then('I will click Enter', () => {
    cy.get(target.Log_in).type('{enter}')
})

When('I click account icon in home page', () => {
    cy.get('#accousnt').click()
})

When('I click on create account Link in home page', () => {
    cy.get('#accountNav-createAccount').click()
})

Then('I Enter {string} address in the Email text box', (email) => {
    cy.get('#username').type(email)
})

Then('I Enter {string} in the First name text box', (fname) => {
    cy.get('#firstname').type(fname)
})

Then('I Enter {string}  in the last name text box', (lname) => {
    cy.get('#lastname').type(lname)
})

Then('I Enter {string} in the Mobile phone number text box', (phone) => {
    cy.get('#phone').type(phone)
})

Then('I Enter {string} in the Create Password text box', (pass) => {
    cy.get('#password').type(pass)
})