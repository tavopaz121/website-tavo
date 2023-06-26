describe('When a user wants to login with email/password', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('Then the list of post should be shown', () => {
    cy.url().should('include', '/login');
    cy.get('[data-cy="login-form"]').should('be.visible');
    cy.get('[data-cy="email-field"]').type('martina.velasco.b@gmail.com');
    cy.get('[data-cy="password-field"]').type('123456');
    cy.get('[data-cy="login-button"]').click();
    cy.url().should('equal', 'http://localhost:3000/');
  });
})

/*
Scenario: Login
  Given a login form
  And enters an email
  And enters a password
  And repeats the password
  And send this information
  Then a succesful screen should be shown
*/