describe('Address Page components - NewLine <7Mb', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine/address','', '/availability/address');
    //cy.wait('@postCall');
    /*cy.get("input[name='postcode']").type('FY5 2PJ')
    cy.get('#confirmOrderButton-id').click();
    cy.wait(3000);*/
    cy.url().should('contain', 'availability/address');
    cy.wait(2000);
  });

  context('When user does NOT select an address and does NOT select a lengthLivedAtAddress option', function(){
    it('should see an error message underneath the options', function(){
      cy.get('#confirmOrderButton-id').should('have','Next')
      .click();
      //.wait(3000)
      cy.contains('Please specify when you moved into this property.');
      cy.contains('Please select an address.');
    });
    it('should the notification message displayed on the top header', function(){
      cy.get('.form-errors.notification.ng-isolate-scope.notification--error')
      .should('be.visible')
      .and('contain', 'Move-in-date is required')
      .and('contain','Address is required');
    });
  });

  context('When user selects an address and does NOT a lengthLivedAtAddress option', function(){
    it('should see an error message underneath the options', function(){
      cy.get('#confirmOrderButton-id').should('have','Next').click();
      cy.contains('Please specify when you moved into this property.');
    });
    it('should the notification message displayed on the top header', function(){
      cy.get('.form-errors.notification.ng-isolate-scope.notification--error')
      .should('be.visible')
      .and('contain', 'Move-in-date is required');

    });
  });
  context('When user select an address and the first option of lengthLivedAtAddress question ', function(){
    it('should able to select the address from the', function(){
      cy.get('#address-list-id > div.segmented-container > label:nth-child(4)')
      .click();
      cy.get('#address-list-id > div.segmented-container > label:nth-child(4) > input')
      .should('have.class', 'ng-valid-parse');
      cy.get('#address-list-id > div.segmented-container > label:nth-child(4) > span > p')
      .should('contain', '8, Gorse Avenue, Thornton-cleveleys, FY5 2PJ');
    });
    it('should see the address notification be displayed correctly', function(){
      cy.get('address-picker > div > div.ng-scope')
      .should('be.visible')
      .and('contain', '8, Gorse Avenue, Thornton-cleveleys, FY5 2PJ');

    });
    it('should able to select the first lengthLivedAtAddres option ', function(){
      cy.get('#wlto-resident-living-id > span').should('contain','You have lived at this address for more than 30 days')
      .click();
      cy.get('#wlto-resident-living-id > input')
      .should('have.class', 'ng-valid-parse');

    });
  });

})
