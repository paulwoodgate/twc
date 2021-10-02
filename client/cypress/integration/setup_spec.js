describe('Test Setup', () => {
  it('connects to cypress', () => {
    expect(true).to.equal(true);
  });

  it('opens the site homepage', () => {
    cy.visit('http://localhost:8080/');
  });
});
