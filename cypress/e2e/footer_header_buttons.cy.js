describe('Перевірка кнопок та посилань', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
  });

  it('Перевіряє кнопку "Sign up"', () => {
    cy.get('.hero-descriptor_btn')
      .should('be.visible')
      .click();
  });

  it('Перевіряє посилання на соцмережі', () => {
    const socialLinks = {
      facebook: 'https://www.facebook.com/Hillel.IT.School',
      telegram: 'https://t.me/ithillel_kyiv',
      youtube: 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1',
      instagram: 'https://www.instagram.com/hillel_itschool/',
      linkedin: 'https://www.linkedin.com/school/ithillel/'
    };

    Object.values(socialLinks).forEach(link => {
      cy.get(`a[href="${link}"]`)
        .should('have.attr', 'target', '_blank')
        .should('be.visible');
    });
  });

  it('Перевіряє посилання у футері', () => {
    cy.get('a[href="https://ithillel.ua"]')
      .should('be.visible')
      .and('have.attr', 'href', 'https://ithillel.ua');

    cy.get('a.contacts_link.h4')
      .should('be.visible')
      .and('have.attr', 'href', 'mailto:developer@ithillel.ua') 
      .and('contain.text', 'support@ithillel.ua'); 
  });
});
