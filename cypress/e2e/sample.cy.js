describe('Простий тест', () => {
  it('Відкриває головну сторінку!', () => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.url().should('include', 'qauto.forstudy.space'); // Перевіряємо, що URL правильний
  });
});
