describe('Test for MapPage', () => {
  it('Visits site and see if the MapPage renders', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport(1280, 720);
    // snapshot name will be the test title
    cy.wait(2000);
    cy.matchImageSnapshot();
  });
});

export {};
