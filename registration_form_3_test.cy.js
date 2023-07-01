beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html')
})

//BONUS TASK: add visual tests for registration form 3
function inputValidData(Tester) 
{ cy.log('Tester')
cy.get('#name').type('Tester')
    cy.get('input[name="email"]').type('example@example.com')
    cy.get('#country').select('Austria')
    cy.get('select#city').select('Vienna')
    cy.contains('label', 'Date of birth').next('input[type="date"]').type('1976-01-01')
    cy.get('input[type="radio"][value="Daily"]').check().should('be.checked')
    cy.contains('label', 'Birthday').next('input[type="date"]').type('1986-01-01')
}
/*
Task list:
* Test suite for visual tests for registration form 3 is already created
* Create tests to verify visual parts of the page:
    * radio buttons and its content
    * dropdown and dependencies between 2 dropdowns
    * checkboxes, their content and links
    * email format
 */

describe('Section 1: visual tests', ()=> {
    it.only('This is my first test', () => {
        // This is empty template
    });
    it('Input valid data to the page', () => {
    })
    cy.get('input[type="checkbox"][ng-model="checkbox"]').check()
    cy.get('input[type="checkbox"]').eq(1).check()
    cy.get('input[type="submit"]').should('be.visible').should('be.enabled').first().click()
    cy.get('input[type="submit"][ng-disabled="myForm.$invalid"]').click()
    cy.contains('Submission received').should('be.visible')
   })


//BONUS TASK: add functional tests for registration form 3

/*
Task list:
* Create second test suite for functional tests
* Create tests to verify logic of the page:
    * all fields are filled in + validation
    * only mandatory fields are filled in + validations
    * mandatory fields are absent + validations (try using function)
    * If city is already chosen and country is updated, then city choice should be removed
    * add file (google yourself for solution)
 */
describe('add functional tests for registration form 3', ()=> {
   /* it.only('Input valid data to the page', () => {
    cy.get('#name').type('Tester')
    cy.get('input[name="email"]').type('example@example.com')
    cy.get('#country').select('Austria')
    cy.get('select#city').select('Vienna')
    cy.contains('label', 'Date of birth').next('input[type="date"]').type('1976-01-01')
    cy.get('input[type="radio"][value="Daily"]').check().should('be.checked')
    cy.contains('label', 'Birthday').next('input[type="date"]').type('1986-01-01')
    cy.get('input[type="checkbox"][ng-model="checkbox"]').check()
    cy.get('input[type="checkbox"]').eq(1).check()
// Check the "Accept our privacy policy" checkbox
    // Click the "Accept our cookie policy" link
cy.get('a[href="cookiePolicy.html"]').click()
})
*/
// * only mandatory fields are filled in + validations
it('Input valid data to the page', () => {
})

})