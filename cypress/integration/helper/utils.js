
export const clickElement = (element) => {
    cy.get(element, {timeout: 60000}).click();
};

export const clickElementWithText = (elementText) => {
    cy.contains(elementText, {timeout: 60000}).click();
};

export const verifyElelementVisible = (element, xpath=false) => {
    if(xpath){
        cy.xpath(element, {timeout: 60000}).should('be.visible');
    } else{
        cy.get(element, {timeout: 60000}).should('be.visible');
    }
};

