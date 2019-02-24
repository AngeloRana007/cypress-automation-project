describe('Availability Check Page fields validation - Porting <7Mb', function () {
  beforeEach(function () {
    console.log('Load Scenario...');
    cy.loadScenarioPorting('Porting/availability','', 'availability');
    //cy.wait('@postCall');
  });

  context('When user does NOT input any postcode and clicks on check details button', function(){
    it('should display an error message and notification banner', function(){
      cy.get('#confirmOrderButton-id')
      .click()
      .end();
      cy.contains('Please enter valid postcode.');
      cy.contains('unable to submit the current form due to the following errors');
    });
  });

  context('When user enters an invalid postcode and clicks on check details button', function(){
    it('should display an error message and notification banner', function(){
      cy.get("input[name='postcode']")
      .type('INVALIDpostcode')
      cy.get('#confirmOrderButton-id')
      .click()
      .end();
      cy.contains('Please enter valid postcode.');
      cy.contains('unable to submit the current form due to the following errors');
    });
  });

  context('When user enters an invalid phone number and valid postcode and clicks on check details button', function(){
    it('should display an error message and notification banner', function(){
      cy.get("input[name='postcode']")
      .type('BA13 3BN');
      cy.get("input[name='phoneNumber']")
      .type('invalidPhoneNumber');
      cy.get('#confirmOrderButton-id')
      .click()
      .end();
      cy.contains('Please enter valid phone number.');
      cy.contains('unable to submit the current form due to the following errors');
    });
  });
  context('When user enters a postcode and correct phone number and clicks on check details button', function(){
    it('should navigate to result page', function(){
      cy.get("input[name='postcode']")
      .type('BA13 3BN')
      cy.get("input[name='phoneNumber']").type('02017238105');
      cy.get('#confirmOrderButton-id')
      .click();
      cy.wait(3000);
      cy.url().should('contain', 'availability/address');
    });
  });
})
