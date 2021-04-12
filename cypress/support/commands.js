// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
 Cypress.Commands.add('LogResponse', (response) => {
    // cy.log(JSON.stringify(response.body))
    // cy.log(JSON.stringify(response.duration))
    // cy.log(JSON.stringify(response.headers))
    // cy.log(JSON.stringify(response.requestHeaders))
    // cy.log(JSON.stringify(response.status))
    cy.log(JSON.stringify(response.allRequestResponses))  })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
