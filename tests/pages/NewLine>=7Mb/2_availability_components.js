describe('Availability Check Page components - NewLine>=7Mb', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine>7Mb/availability','', 'availability');
    //cy.wait('@postCall');
  });
  context('When user navigates to availability page for a NewLine scenario', function(){
    it('should have a login to my account button', function(){
      cy.contains('Log in to My Account');
    });
    it('should have a postcode field', function(){
      console.log('test starting...');
      cy.get('postcode').should('have','postcode');
    });
    it('should have a cli field', function(){
      cy.get('phoneNumber').should('have','phoneNumber');
    });
    it('should have a check details button', function(){
      cy.get('#confirmOrderButton-id').should('have','Check details');
    });
  });
})
