describe('Registration and Login Tests', () => {
    const email = `testuser+${Date.now()}@example.com`
    const password = 'SuperSecret123'
  
    it('should register a new user', () => {
      cy.register('Test', 'User', email, password)
    })
  
    it('should log in with registered user', () => {
      cy.login(email, password)
    })
  })
  