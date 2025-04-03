class GaragePage {
    visit() {
      cy.visit('/panel/garage');
    }
  
    addCar(brand, model, mileage) {
      cy.get('[data-testid="add-car"]').click();
      cy.get('[name="brand"]').type(brand);
      cy.get('[name="model"]').type(model);
      cy.get('[name="mileage"]').type(mileage);
      cy.get('[data-testid="submit"]').click();
    }
  }
  
  export default new GaragePage();
  