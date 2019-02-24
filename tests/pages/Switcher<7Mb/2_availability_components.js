describe('Availability Check Page components - Switcher<7Mb', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioSwitcher('Switcher/availability','', 'availability');
    //cy.wait('@postCall');
  });
  context('When user navigates to availability page for a Switcher scenario', function(){
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
