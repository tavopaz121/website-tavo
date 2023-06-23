describe('When anonymous user wants to publish a healthy food', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="btn-publish"]').click();
  });
  
  it('Then a login form should be shown', () => {
    cy.url().should('include', '/login');
    cy.get('[data-cy="login-form"]').should('be.visible');
  });
})