Cypress.Commands.add('register', (name, lastName, email, password) => {
  cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.contains('Sign up').click()
    cy.get('input[name="name"]').type(name)
    cy.get('input[name="lastName"]').type(lastName)
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password, { sensitive: true })
    cy.get('input[name="repeatPassword"]').type(password, { sensitive: true })
    cy.contains('Register').click();

  })
  
  Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.contains('Sign In').click()
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password, { sensitive: true })
    cy.contains('Login').click();

  })
  
  Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      options.log = false
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
    return originalFn(element, text, options)
  })
  