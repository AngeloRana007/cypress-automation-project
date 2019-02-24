describe('Result Page - faster broadband(<7Mb)- 6/10 devices & browsing -nav', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine/result/faster_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 6-10 & usage=browsing and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(3)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(1)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
      cy.wait(4000);
    });
  });
});
describe('Result Page - faster broadband(<7Mb)- 6/10 devices & browsing - components', function () {
  context('When user selects devices = 6-10 & usage=browsing', function(){
    it('should get `Faster Broadband` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Faster BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('contain','Best for you');
    });
    it('should not have Fast and Fastest fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('not.contain','Best for you');
    });
  });
});

describe('Result Page - faster broadband(<7Mb)- 6-10 devices & Streaming Music', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine/result/faster_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 6-10  & usage=Streaming Music and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(3)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(2)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Faster Broadband` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Faster BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('contain','Best for you');
    });
    it('should not have Fast and Fastest fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('not.contain','Best for you');
    });
  });
});

describe('Result Page - faster broadband(<7Mb)- 6-10 devices & Video Calls', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine/result/faster_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 6-10  & usage=Video Calls and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(3)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(3)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Faster Broadband` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Faster BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('contain','Best for you');
    });
    it('should not have Fast and Fastest fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('not.contain','Best for you');
    });
  });
});

describe('Result Page - faster broadband(<7Mb)- 6-10 devices & Streaming Video', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine/result/faster_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 6-10  & usage=Streaming Video and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(3)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(4)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Faster Broadband` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Faster BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('contain','Best for you');
    });
    it('should not have Fast and Fastest fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('not.contain','Best for you');
    });
  });
});

describe('Result Page - faster broadband(<7Mb)- 6-10 devices & Online Gaming', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine/result/faster_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 6-10  & usage=Online Gaming and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(3)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(5)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Faster Broadband` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Faster BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('contain','Best for you');
    });
    it('should not have Fast and Fastest fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('not.contain','Best for you');
    });
  });
});

describe('Result Page - faster broadband(<7Mb)- 6-10 devices & Downloading/uploading video', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine/result/faster_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 6-10  & usage=Downloading/uploading video and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(3)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(6)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Faster Broadband` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Faster BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('contain','Best for you');
    });
    it('should not have Fast and Fastest fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('not.contain','Best for you');
    });
  });
});
