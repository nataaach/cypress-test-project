describe('Простий тест', () => {
    it('Відкриває головну сторінку', () => {
      cy.visit('/')
      cy.contains('Welcome').should('be.visible')
    })
  })
  