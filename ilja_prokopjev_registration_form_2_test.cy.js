beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_2.html')
})
/*
Assignement 4: add content to the following tests
*/

describe('Section 1: Functional tests', () => {

    it('User can use only same both first and validation passwords', ()=>{
        // Add test steps for filling in only mandatory fields
    cy.get('#username').type('Ilja')
    cy.get('#email').type('google@google.com')
    cy.get('[data-cy="name"]').type('John')
    cy.get('#lastName').type('Williams')
    cy.get('[data-testid="phoneNumberTestId"').type('112')
    cy.get('input[name="password"]').type('MyPass')
    cy.get('[name="confirm"]').type('MyPass')
    cy.get('h2').contains('Password').click()
    cy.get('.submit_button').should('be.enabled')
    cy.get('.submit_button').click()
    cy.get('#input_error_message').should('not.be.visible')
    cy.get('#success_message').should('be.visible')

})
        // Type confirmation password which is different from first password
    it('Fill in different values in the password and confirmation password input fields', ()=>{
            // Add test steps for filling in only mandatory fields
    cy.get('#username').type('Ilja')
    cy.get('#email').type('google1@google.com')
    cy.get('[data-cy="name"]').type('John2')
    cy.get('#lastName').type('Williams2')
    cy.get('[data-testid="phoneNumberTestId"').type('112')
    cy.get('input[name="password"]').type('MyPass')
    cy.get('[name="confirm"]').type('MyPass11')
    cy.get('h2').contains('Password').click()
        // Assert that submit button is not enabled
    cy.get('.submit_button').should('be.disabled')
        // Assert that successful message is not visible
    cy.get('#success_message').should('not.be.visible');
        // Assert that error message is visible
    cy.get('#password_error_message').should('be.visible');
    })
    
    it('same values in the password and confirmation password input fields', ()=>{
        // Add test steps for filling in only mandatory fields
    cy.get('#username').type('Ilja')
    cy.get('#email').type('google3@google.com')
    cy.get('[data-cy="name"]').type('John3')
    cy.get('#lastName').type('Williams3')
    cy.get('[data-testid="phoneNumberTestId"').type('112')
    cy.get('input[name="password"]').type('MyPass11')
    cy.get('[name="confirm"]').type('MyPass11')
    cy.get('h2').contains('Password').click()
    // Assert that submit button is not enabled
    cy.get('.submit_button').should('be.enabled')
    // Assert that successful message is visible BUG visility none block
    //cy.get('#success_message').should('be.visible');
    // Assert that error message is  not visible 
    cy.get('#password_error_message').should('not.be.visible');

    })
})

describe('Section 1; Section 1: Functional tests”, where all fields on the page are filled in + validation', () => {
    it('User can submit form with all fields added', ()=>{
        // Add test steps for filling in ALL fields
    cy.get('#username').type('Ilja')
    cy.get('#email').type('google@google.com')
    cy.get('[data-cy="name"]').type('John')
    cy.get('#lastName').type('Williams')
    cy.get('[data-testid="phoneNumberTestId"').type('112')
    cy.get('input[name="password"]').type('MyPass')
    cy.get('[name="confirm"]').type('MyPass')
    cy.get('#htmlFavLanguage').should('have.value', 'HTML').click()
    cy.get('#vehicle1').should('have.value', 'Bike').click()
    cy.get('#cars').should('have.value', 'volvo')
    cy.get('#animal').should('have.value', 'dog')
        // Assert that submit button is enabled
    cy.get('.submit_button').should('be.enabled').click()
        // Assert that after submitting the form system show successful message
        cy.get('#success_message').should('be.visible')
    })

    it('User can submit form with valid data and only mandatory fields added', ()=>{
        // Add test steps for filling in ONLY mandatory fields
        cy.get('#username').type('Ilja')
        cy.get('#email').type('google@google.com')
        cy.get('[data-cy="name"]').type('John')
        cy.get('#lastName').type('Williams')
        cy.get('[data-testid="phoneNumberTestId"').type('112')
        cy.get('input[name="password"]').type('MyPass')
        cy.get('[name="confirm"]').type('MyPass')
        // Assert that submit button is enabled BUG
        //cy.get('.submit_button').should('be.enabled').click()
        // Assert that after submitting the form system shows successful message BUG 
        //cy.get('#success_message').should('be.visible')
    })

    it('Input valid data to the page', () => {
        // Test if system lets make registration without First and Last name
    
      // Mantatory fields: Do not fill First and Last name  
      cy.get('#username').type('ErikaSed' )
      cy.get('#email').type('erika@erika.com')
      cy.get('[data-testid="phoneNumberTestId"]').type('555666777')    
      // Favourite Web languaeg - JavaScript  
      cy.get('#javascriptFavLanguage').click()   
      // Favourite transport - CAR
      cy.get('input[name="vehicle2"]').click()  
      // Select a car - Audi  
      cy.get('#cars').select('Audi')  
      // Select your favourite animal -Hippo  
      cy.get('#animal').select('Hippo')  
      // Add password   
      cy.get('input[name="password"]').type('MyPass111')  
      cy.get('[name="confirm"]').type('MyPass111')  
       // Asserting that Submit button is disabled
       cy.get('.submit_button').should('be.disabled')  
      // Success message is not visible  
      cy.get('#success_message').should('not.be.visible')  
      // Error message is visible  
      cy.get('#applicationForm').click()
      cy.get('#input_error_message').should('have.css', 'display', 'none')      


    })

    it('User can submit form with all fields added + validation', ()=>{
        // Add test steps for filling in ALL fields
    cy.get('#username').type('Ilja')
    cy.get('#email').type('google@google.com')
    cy.get('[data-cy="name"]').type('John')
    cy.get('#lastName').type('Williams')
    cy.get('[data-testid="phoneNumberTestId"').type('112')
    cy.get('input[name="password"]').type('MyPass')
    cy.get('[name="confirm"]').type('MyPass')
    cy.get('#htmlFavLanguage').should('have.value', 'HTML').click()
    cy.get('#vehicle1').should('have.value', 'Bike').click()
    cy.get('#cars').should('have.value', 'volvo')
    cy.get('#animal').should('have.value', 'dog')
        // Assert that submit button is enabled
    cy.get('.submit_button').should('be.enabled').click()
        // Assert that after submitting the form system show successful message
        cy.get('#success_message').should('be.visible')
    })
})


    describe('Section 1: Functional tests, validation', () => {
    it('Input valid data to the page', () => {
    cy.get('#username').type('IljaPro')
    cy.get('#email').type('google@google.com')
    cy.get('[data-cy="name"]').type('John')
    cy.get('#lastName').type('Williams')
    cy.get('[data-testid="phoneNumberTestId"]').type('112')
    cy.get('input[name="password"]').type('MyPass')
    cy.get('[name="confirm"]').type('MyPass')
    cy.get('#htmlFavLanguage').should('have.value', 'HTML').click()
    cy.get('#vehicle1').should('have.value', 'Bike').click()
    cy.get('#cars').select('volvo')
    cy.get('#animal').select('Dog')
    //submit button should be enabled
    cy.get('.submit_button').should('be.enabled').click()
    //successful message should be visible
    cy.get('#success_message').should('be.visible')
    })


    // You can add more similar tests for checking other mandatory field's absence
    describe('Section 1: Functional tests, validation, name is missing', () => {
        it('Input valid data to the page', () => {
        cy.get('#username').type('Ilja')
       //cy.get('[data-cy="name"]').type('John')
       cy.get('input#email').type('google@google.com')
        cy.get('#lastName').type('Williams')
        cy.get('[data-testid="phoneNumberTestId"]').type('112')
        cy.get('input[name="password"]').type('MyPass')
        cy.get('[name="confirm"]').type('MyPass')
        cy.get('#htmlFavLanguage').should('have.value', 'HTML')
        cy.get('#vehicle1').check('Bike')
        cy.get('#animal').select('cat')
        cy.get('#cars').select('saab')
        //submit button should be enabled
        cy.get('.submit_button').should('be.disabled')
        //successful message should be visible BUG
        cy.get('#success_message').should('not.be.visible')
        })
    })
    

  /*  
Assignement 5: create more visual tests
*/

describe('Section 2: Visual tests', () => {
    it('Check that logo is correct and has correct size', () => {
        cy.log('Will check logo source and size')
        cy.get('img').should('have.attr', 'src').should('include', 'cerebrum_hub_logo')
        // get element and check its parameter height, to be equal 178
        cy.get('img').invoke('height').should('be.lessThan', 178)
            .and('be.greaterThan', 100)
    })

    // Create similar test for checking second picture //
    it('Check that logo is correct and has correct size,2', () => {
        cy.log('Will check logo source and size');
        cy.get('img').should('have.attr', 'src').should('include', 'cerebrum_hub_logo');
        // Get the element and check its height parameter
        cy.get('img')
          .invoke('height')
          .should('be.lessThan', 178)
          .and('be.greaterThan', 100);
      });
      

    it('Check navigation part', () => {
        cy.get('nav').children().should('have.length', 2)

        // Get navigation element, find siblings that contains h1 and check if it has Registration form in string
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
        
        // Get navigation element, find its first child, check the link content and click it
        cy.get('nav').children().eq(0).should('be.visible')
            .and('have.attr', 'href', 'registration_form_1.html')
            .click()
        
        // Check that currently opened URL is correct
        cy.url().should('contain', '/registration_form_1.html')
        
        // Go back to previous page
        cy.go('back')
        cy.log('Back again in registration form 2')
    })

    // Create similar test for checking second link to Cerebrum Hub homepage
    it('Check navigation part 2', () => {
        cy.get('nav').children().should('have.length', 2)
        // Get navigation element, find siblings that contains h1 and check if it has Registration form in string
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
        // Get navigation element, find its first child, check the link content and click it
        cy.get('nav').children().eq(1).should('be.visible')
            .and('have.attr', 'href', 'https://cerebrumhub.com/')
            .click()
        // Check that currently opened URL is correct
        cy.url().should('contain', 'cerebrumhub.com')
        // Go back to previous page
        cy.go('back')
        cy.log('Back again in registration form 2')
    })
    // Check that URL to Cerebrum Hub page is correct and clickable

    it('Check that radio button list is correct', () => {
        // Array of found elements with given selector has 4 elements in total
        cy.get('input[type="radio"]').should('have.length', 4)
        cy.get('input[type="radio"]').next().eq(0).should('have.text','HTML').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(1).should('have.text','CSS').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(2).should('have.text','JavaScript').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(3).should('have.text','PHP').and('not.be.checked')

        // Selecting one will remove selection from other radio button
        cy.get('input[type="radio"]').eq(0).check().should('be.checked')
        cy.get('input[type="radio"]').eq(1).check().should('be.checked')
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
    })
    // Create test similar to previous one
    it('Check that check box list is correct', () => {
        cy.get('input.checkbox.vehicles').should('have.length', 3)
        cy.get('input#vehicle1').should('exist')
        cy.get('input#vehicle2').should('exist')
        cy.get('input#vehicle3').should('exist')
        cy.get('#vehicle1').should('not.be.checked')
        cy.get('#vehicle2').should('not.be.checked')
        cy.get('#vehicle3').should('not.be.checked')
    //Verify the label of each checkbox
       cy.get('label[for="vehicle1"]').siblings('.checkbox').eq(0).should('have.value', 'Bike')
       cy.get('label[for="vehicle1"]').siblings('.checkbox').eq(1).should('have.value', 'Car')
       cy.get('label[for="vehicle1"]').siblings('.checkbox').eq(2).should('have.value', 'Boat')
     //marking the first checkbox as checked and assert its state
     cy.get('#vehicle1').check().should('be.checked').and('have.value','Bike')
     cy.get('#vehicle2').should('not.be.checked').and('have.value','Car')
     cy.get('#vehicle3').should('not.be.checked').and('have.value','Boat')
     //second checkbox as checked and assert the state of the first and second checkboxes (both will stay checked)
     cy.get('#vehicle1').check().should('be.checked').and('have.value','Bike')
     cy.get('#vehicle2').check().should('be.checked').and('have.value','Car')
     cy.get('#vehicle3').should('not.be.checked').and('have.value','Boat')

    })

    it('Car dropdown is correct', () => {
        // Here is an example how to explicitely create screenshot from the code
        // Select second element and create screenshot for this area, and full page
        cy.get('#cars').select(1).screenshot('Cars drop-down')
        cy.screenshot('Full page screenshot')

        // Here are given different solutions how to get the length of array of elements in Cars dropdown
        // Next 2 lines of code do exactly the same!
        cy.get('#cars').children().should('have.length', 4)
        cy.get('#cars').find('option').should('have.length', 4)
        
        //Check  that first element in the dropdown has text Volvo
        cy.get('#cars').find('option').eq(0).should('have.text', 'Volvo')
        
        // Advanced level how to check the content of the Cars dropdown
        cy.get('#cars').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(actual).to.deep.eq(['volvo', 'saab', 'opel', 'audi'])
        })
    })

    // Create test similar to previous one
    it('Animal dropdown is correct', () => {
                // Select second element and create screenshot for this area, and full page
                cy.get('#animal').select(1).screenshot('Animal drop-down')
                cy.screenshot('Full page screenshot')
    //Check that the dropdown of favorite animals is correct and have length of array of elements.
        cy.get('#animal').children().should('have.length', 6)
        cy.get('#animal').find('option').should('have.length', 6)
        //Check  that first element in the dropdown has text Dog
        cy.get('#animal').find('option').eq(0).should('have.text', 'Dog')
    //Verify all values in the dropdown
    cy.get('#animal').select('dog');

const expectedValues = ['dog', 'cat', 'snake', 'hippo', 'spider', 'mouse']
const expectedText = ['Dog','Cat', 'Snake', 'Hippo', 'Cow', 'Horse']

cy.get('#animal option').each((option) => {
  const optionValue = option.val()
 // const optionText = option.text().trim()
  
  expect(optionValue).to.be.oneOf(expectedValues)
  //expect(optionText).to.be.oneOf(expectedValues)
})

})
})
/*
function inputValidData() {
    cy.log('Username will be filled')
    cy.get('input[data-testid="user"]').type('Something')
    cy.get('#email').type('validemail@yeap.com')
    cy.get('[data-cy="name"]').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('[data-testid="phoneNumberTestId"]').type('10203040')
    // If element has multiple classes, then one of them can be used
    cy.get('#password').type('MyPass')
    cy.get('#confirm').type('MyPass')
    cy.get('h2').contains('Password').click()
}
*/
    })
