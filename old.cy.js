beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html');
  });
  
  // //BONUS TASK: add functional tests for registration form 3

  describe('Section 1: functional test', () => {
    it('This is my first test', () => {
    });
  
    //it('all fields are filled in + validation', () => {
      function inputValidData(Ilja) {
        cy.log('Ilja')
        cy.get('#name').type('Ilja');
        cy.get('input[name="email"]').type('example@egoogle.com')
        cy.get('#country').select('Austria')
        cy.get('select#city').select('Vienna')
        cy.contains('label', 'Date of birth').next('input[type="date"]').type('1976-01-01')
        cy.get('input[type="radio"][value="Daily"]').check().should('be.checked')
        cy.contains('label', 'Birthday').next('input[type="date"]').type('1986-01-01')
        
      }
      // Call the inputValidData function and pass the username
      it('all fields are filled in + validation', () => {
      inputValidData('Ilja');
      cy.get('input[type="checkbox"][ng-model="checkbox"]').check()
      cy.get('input[type="checkbox"]').eq(1).check()
      //cy.get('input[type="submit"]').should('be.visible').should('be.enabled').first().click() BUG
      //cy.get('input[type="submit"]').should('be.visible').should('be.enabled').last().click()

      cy.get('input[type="submit"][ng-disabled="myForm.$invalid"]').click()
      cy.contains('Submission received').should('be.visible')
     })

     it.only('only mandatory fields are filled in + validations', () => {
     inputValidData('Ilja');
    cy.get('input[type="radio"][value="Daily"]').click().should('not.be.checked')

     })
  })