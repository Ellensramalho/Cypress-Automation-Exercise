describe('Visitar o site e colocar produto no carrinho', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
    cy.contains('a', 'Products').click();
    cy.contains('a', 'Women').click();
    cy.contains('a', 'Dress').click();
    cy.get('a')
    .filter(':contains("View Product")')
    .eq(1)
    .click()

    cy.get('#quantity').clear().type('5')
    cy.get('.btn.btn-default.cart').click()
    cy.get('.btn.btn-success.close-modal.btn-block').click()

    cy.get('#name').type('Testadora')
    cy.get('#email').type('testadora@gmail.com')
    cy.get('#review').type('Os vestidos chegaram bem embalados.')
    cy.get('#button-review').click()

    cy.contains('a', 'Cart').click()

    cy.get('.btn.btn-default.check_out').click()
    
  })
})