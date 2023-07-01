beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html');
  });
  
  describe('Section 1: functional test', () => {
    it('This is my first test', () => {
      // Test code goes here
    });
  
    function inputValidData(Ilja) {
      cy.log(Ilja)
      cy.log('Ilja')
      cy.get('#name').type('Ilja');
      cy.get('input[name="email"]').type('example@example.com')
      cy.get('#country').select('Austria')
      cy.get('select#city').select('Vienna')
      cy.contains('label', 'Date of birth').next('input[type="date"]').type('1976-01-01')
      cy.get('input[type="radio"][value="Daily"]').check().should('be.checked')
      cy.contains('label', 'Birthday').next('input[type="date"]').type('1986-01-01')
    }
  
    it.only('all fields are filled in + validation', () => {
      inputValidData('Ilja');
      cy.get('input[type="checkbox"][ng-model="checkbox"]').check()
      cy.get('input[type="checkbox"]').eq(1).check()
      cy.get('input[type="submit"]').should('be.visible').should('be.enabled').first().click()
      cy.get('input[type="submit"][ng-disabled="myForm.$invalid"]').click()
      cy.contains('Submission received').should('be.visible')
    })
  
    it('only mandatory fields are filled in + validations', () => {
      inputValidData('Ilja');
      cy.log('Ilja')
      cy.get('input[type="radio"][value="Daily"]').should('not.be.checked')
    })
  })
  