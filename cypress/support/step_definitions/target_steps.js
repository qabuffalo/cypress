/// <reference types= "cypress" /> 
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

When('I click login', () => {
    cy.get(target.Login).click()
})

And('I click on Sign-in button', () => {
    cy.get(target,Sign_In).click()
})



Then('I will be taken to to Sign-in page', () => {
    cy.title().should('contain', 'Login: Target')
})

And('I will enter username', () => {
    cy.get(target.Username).type("qabuffalo@gmail.com")
})
And('I will enter password', () => {
    cy.get(target.Password).type('qabuffalo')
})

Then('I will click Enter', () => {
    cy.type('{enter}')
})

And('I click account icon in home page', () => {
    cy.get('#account').click()
})

And('I click on create account Link in home page', () => {
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