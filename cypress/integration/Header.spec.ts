describe('Header Tests', () => {
  it('Visits site and see if the header renders', () => {
    cy.visit('http://localhost:3000/');

    cy.get('#header').should('be.visible');
    cy.get('#header').children().should('have.length', 3);

    cy.get('#dark-mode-button');
  });
  it('Renders the header icons', () => {
    cy.visit('http://localhost:3000/');

    cy.get('#header').should('be.visible');
    cy.get('#dark-mode-button').should('be.visible');
    cy.get('#menu-button').should('be.visible');
  });
  it('Dark Mode Toggles', () => {
    cy.visit('http://localhost:3000/');

    cy.get('#header').should('be.visible');
    cy.get('#dark-mode-button').click();
    cy.get('#header').should(
      'have.css',
      'background-color',
      'rgb(242, 242, 242)',
    );
    cy.get('#dark-mode-button').click();
    cy.get('#header').should('have.css', 'background-color', 'rgb(51, 51, 51)');
  });
});

export {};
