describe('Address Page navigation to righplan - NewLine <7Mb', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine/rightplan','', '/availability/address');
    cy.url().should('contain', 'availability/address');
  });

  context('When user select an address and the first option of lengthLivedAtAddress question ', function(){
    it('should able to navigate to rightplan page upon clicking on next ', function(){
      cy.get('#address-list-id > div.segmented-container > label:nth-child(4)')
      .click();
      cy.get('#address-list-id > div.segmented-container > label:nth-child(4) > span > p')
      .should('contain', '8, Gorse Avenue, Thornton-cleveleys, FY5 2PJ');

      cy.get('#wlto-resident-living-id > span')
      .should('contain','You have lived at this address for more than 30 days')
      .click();

      cy.get('#confirmOrderButton-id').should('have','Next')
      .click();
      cy.url()
      .should('contain', 'rightplan').end();
    });
  });

})
