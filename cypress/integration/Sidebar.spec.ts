describe('Test for Sidebar', () => {
  it('Visits site and see if the Sidebar renders', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#sidebar').should('be.visible');
  });
  it('Renders the menu button icon', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#menu-button').should('be.visible');
  });
  it('The sidebar closes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#menu-button').click();
    cy.get('#sidebar').should('not.exist');
  });
  it('The sidebar closes and opens', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#menu-button').click();
    cy.get('#sidebar').should('not.exist');
    cy.get('#menu-button').click();
    cy.get('#sidebar').should('be.visible');
  });
});

export {};
