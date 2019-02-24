describe('Result Page - fast broadband(>7Mb)- 3-5 devices & Streaming Music', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine>7Mb/result/fastbb_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 3-5  & usage=Streaming Music and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(2)`)
      .click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(2)`)
      .click();
      cy.get('#confirmOrderButton-id')
      .should('have','Get plan options')
      .click();
      cy.wait(2000);
      cy.url().should('contain', 'result')
    });
    it('should get `Fast Broadband` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1) section')
      .should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Fast BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)')
      .should('contain','Best for you');
    });
    it('should not have Faster and Fastest fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)')
      .should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)')
      .should('not.contain','Best for you');
    });
  });
});

describe('Result Page - faster broadband(>7Mb)- 3-5 devices & Video Calls', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine>7Mb/result/fastbb_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 3-5  & usage=Video Calls and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(2)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(3)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Fast Broadband` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1) section')
      .should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Fast BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)')
      .should('contain','Best for you');
    });
    it('should not have Faster and Fastest fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)')
      .should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)')
      .should('not.contain','Best for you');
    });
  });
});
