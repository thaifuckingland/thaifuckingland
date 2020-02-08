// https://docs.cypress.io/api/introduction/api.html

describe('fucking list', () => {
  it('shows title', () => {
    cy.visit('/');
    cy.contains('h1', 'thaifuckingland');
  });

  it('shows fucking list', () => {
    cy.visit('/');
    cy.get('.fucking-list');
  });
});
