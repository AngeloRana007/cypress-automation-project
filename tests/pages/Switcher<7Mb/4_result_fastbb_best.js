
describe('Result Page - fast broadband(<7Mb)- 1 device & browsing', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioSwitcher('Switcher/result/fastbb_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 1 & usage=browsing and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(1)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(1)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Fast Broadband` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Fast BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('contain','Best for you');
    });
    it('should not have Faster and Fastest fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('not.contain','Best for you');
    });
  });
});

describe('Result Page - fast broadband(<7Mb) - 3-5 devices & browsing', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioSwitcher('Switcher/result/fastbb_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 3-5 & usage=browsing and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(2)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(1)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Fast Broadband` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Fast BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('contain','Best for you');
    });
    it('should not have Faster and Fastest fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('not.contain','Best for you');
    });
  });
})
