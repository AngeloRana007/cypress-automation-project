describe('Availability Check Page fields validation - Switcher<7Mb', function () {
  beforeEach(function () {
    console.log('Load Scenario...');
    cy.loadScenarioSwitcher('Switcher/availability','', 'availability');
    //cy.wait('@postCall');
  });

  context('When user does NOT input any postcode and clicks on check details button', function(){
    it('should display an error message and notification banner', function(){
      cy.get('#confirmOrderButton-id').click().end();
      cy.contains('Please enter valid postcode.');
      cy.contains('unable to submit the current form due to the following errors');
    });
  });

  context('When user enters an invalid postcode and clicks on check details button', function(){
    it('should display an error message and notification banner', function(){
      cy.get("input[name='postcode']").type('INVALIDpostcode');
      cy.get('#confirmOrderButton-id').click().end();
      cy.contains('Please enter valid postcode.');
      cy.contains('unable to submit the current form due to the following errors');
    });
  });


  context('When user enters an invalid phone number and valid postcode and clicks on check details button', function(){
    it('should display an error message and notification banner', function(){
      cy.get("input[name='postcode']").type('W11 4AR');
      cy.get("input[name='phoneNumber']").type('invalidPhoneNumber');
      cy.get('#confirmOrderButton-id').click().end();
      cy.contains('Please enter valid phone number.');
      cy.contains('unable to submit the current form due to the following errors');
    });
  });

  context('When user enters a postcode and clicks on check details button', function(){
    it('should navigate to result page', function(){
      cy.get("input[name='postcode']").type('W11 4AR')
      cy.get("input[name='phoneNumber']").type('02011201704');
      cy.get('#confirmOrderButton-id').click().end();
      //cy.wait(3000);
      cy.url().should('contain', 'rightplan');
      //cy.get('#postcode-id > div > p.input__error__text').should('not.contain', 'Please enter a valid postcode');
    });
  });
})
