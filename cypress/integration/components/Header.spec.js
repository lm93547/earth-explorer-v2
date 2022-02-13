/* eslint-disable no-undef */
describe('Header Test', () => {
    it('The Header Renders', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.navbar').should('be.visible')
      cy.get('.navbar-item').should('be.visible')
    })
})