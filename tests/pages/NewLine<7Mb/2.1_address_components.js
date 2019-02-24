describe('Address Page components - NewLine <7Mb', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine/availability','', 'availability');
    //cy.wait('@postCall');
  });
  context('When user enters a postcode and clicks on check details button', function(){
    it('should navigate to result page', function(){
      cy.get("input[name='postcode']").type('FY5 2PJ')
      cy.get('#confirmOrderButton-id').click();
      //cy.wait(3000);
      cy.url().should('contain', 'availability/address');
    });
    it('should contain the address list', function(){
      cy.contains('Select your address information from the list below:');
    });
    it('should contain the lenght lived address question', function(){
      cy.contains('How long have you lived at this address:');
    });
    it('should contain the 1st option of living address', function(){
      cy.get('#wlto-resident-living-id > span')
      .should('contain','You have lived at this address for more than 30 days');
    });
    it('should contain the 2nd option of living address', function(){
      cy.get('#wlto-resident-moved-id > span')
      .should('contain','You have moved here within the last 30 days')
    });
    it('should contain the 3th option of living address', function(){
      cy.get('#wlto-resident-moving-id > span')
      .should('contain','You are moving to this address')
    });
    it('should have the next button', function(){
      cy.get('#confirmOrderButton-id')
      .should('have','Next');
    });
    it('should have the FAQs section', function(){
      cy.get('.unbutton.accordion__pane__header')
      .should('exist');
      cy.get('.unbutton.accordion__pane__header')
      .should('have.length', 10);
    });
  });
  context('When user checks the address list', function(){
    it('should contain the correct number of addresses', function(){
      cy.contains('Select your address information from the list below:');
      //#address-list-id > div.segmented-container > label
      cy.get('#address-list-id > div.segmented-container > label').should('have.length', 13);
    });
  });
  describe('When user clicks successively the first 4 radio address options', () => {
    const devicesOptions= [1, 2, 3, 4];
    devicesOptions.forEach(addressId => {
      it(('should be selected the address: ' + addressId), () => {
        cy.get(`#address-list-id > div.segmented-container > label:nth-child(${addressId})`).click();
      });
    });
    it('should have at least one address selected now', function(){
      cy.get('#address-list-id > div.segmented-container > label:nth-child(4) > input').should('have.class', 'ng-valid-parse');
    });
    it('should have the address selected as 8, Gorse Avenue, Thornton-cleveleys, FY5 2PJ', function(){
      cy.get('#address-list-id > div.segmented-container > label:nth-child(4) > span > p').should('contain', '8, Gorse Avenue, Thornton-cleveleys, FY5 2PJ');
    });
  });      //#address-list-id > div.segmented-container > label:nth-child(4)
})
