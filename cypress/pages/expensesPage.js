class ExpensesPage {
    visit() {
      cy.visit('/panel/expenses');
    }
  
    addExpense(amount, date) {
      cy.get('[data-testid="add-expense"]').click();
      cy.get('[name="amount"]').type(amount);
      cy.get('[name="date"]').type(date);
      cy.get('[data-testid="submit"]').click();
    }
  }
  
  export default new ExpensesPage();
  