// https://docs.cypress.io/api/introduction/api.html

const url = 'http://localhost:8080';

describe('Invitation section', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it('banner section should be displayed', () => {
    cy.get('h1')
      .contains('A better way').contains('to enjoy every day')
      .should('be.visible');

    cy.get('.headline')
      .contains('Be the first to know when we launch.')
      .should('be.visible');

    cy.get('[data-test="button-invite"]')
      .contains('Request Invite')
      .should('be.visible');
  });

  it('enter valid name & email should be successfully submit the request form', () => {
    const email = '2@2.com';
    cy.get('[data-test="button-invite"]').click();
    cy.get('[data-test="input-name-invitation"]').type('Peter');
    cy.get('[data-test="input-email-invitation"]').type(email);
    cy.get('[data-test="input-email-confirm-invitation"]').type(email);
    cy.get('[data-test="button-send"]').click();

    cy.get('[data-test="dialog-success"]').should('be.visible');
  });
});
