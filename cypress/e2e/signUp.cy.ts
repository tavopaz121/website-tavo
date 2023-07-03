describe('When anonymous user wants to signUp with name, email and password', () => {
  beforeEach(() => {
    cy.visit('/join')
  });

  it('Then sign up should be successful', () => {
    cy.get('[data-cy="signUp-form"]').should('exist');
    cy.get('[name="name"]').type('Pensemosweb');
    cy.get('[name="email"]').type('pensemoswebjs@gmail.com');
    cy.get('[name="password"]').type('Aeiou1234');
    cy.get('[name="passwordAgain"]').type('Aeiou1234');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/');
    cy.get('[data-cy="btn-logout"]').should('exist');
  });
});