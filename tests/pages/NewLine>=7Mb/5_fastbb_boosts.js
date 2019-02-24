describe('Boosts page - fast broadband', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine>7Mb/boosts/fastbb_boosts','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user clicks on next button in the result page', function(){
    it('should navigate to boosts fast bb page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(1)`).click();
      //cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(2)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(1)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain','result');
      cy.get('#next-id').click();
      cy.url().should('contain', 'customise/nlfast/boosts')
    });
    it('should have Want to add TV? question', function(){
      cy.contains('Want to add TV?');
    });
    it('should have the question link What is the right TV box for me?', function(){
      cy.contains('What is the right TV box for me?');
      /*
      cy.get('div.supporting__content').then(($el) => {
      Cypress.dom.isHidden($el) // false
    });*/
  });
  it('should open a table with the  right TV box options', function(){
    //cy.contains('What is the right TV box for me?');
    cy.get('a.supporting__header').click();
    cy.get('div.supporting__content').should('be.visible');
  });
  it('should have Add extra TV channels', function(){
    cy.contains('Add extra TV channels');
  });
  //What is the right TV box for me?
  it('should have Add landline calls & extra online security (optional)', function(){
    cy.contains('Add landline calls & extra online security (optional)');
  });
});
});
