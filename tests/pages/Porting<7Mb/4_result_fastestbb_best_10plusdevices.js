describe('Result Page - fastest broadband(<7Mb)- 10+ devices & Streaming Music', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioPorting('Porting/result/fastest_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 10+ & usage=Streaming Music and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(4)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(2)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Faster Fibre Speed Boost` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Fastest BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('contain','Best for you');
    });
    it('should not have Fast and Faster fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('not.contain','Best for you');
    });
  });
});

describe('Result Page - fastest broadband(<7Mb)- 10+ devices & Video Calls', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioPorting('Porting/result/fastest_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 10+ & usage=Video Calls and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(4)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(3)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Faster Fibre Speed Boost` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Fastest BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('contain','Best for you');
    });
    it('should not have Fast and Faster fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('not.contain','Best for you');
    });
  });
});

describe('Result Page - fastest broadband(<7Mb)- 10+ devices & Streaming Video', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioPorting('Porting/result/fastest_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 10+ & usage=Streaming Video and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(4)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(4)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Faster Fibre Speed Boost` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Fastest BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('contain','Best for you');
    });
    it('should not have Fast and Faster fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('not.contain','Best for you');
    });
  });
});

describe('Result Page - fastest broadband(<7Mb)- 10+ devices & Online Gaming', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioPorting('Porting/result/fastest_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 10+ & usage=Online Gaming and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(4)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(5)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Faster Fibre Speed Boost` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Fastest BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('contain','Best for you');
    });
    it('should not have Fast and Faster fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('not.contain','Best for you');
    });
  });
});

describe('Result Page - fastest broadband(<7Mb)- 10+ devices & Downloading/uploading video', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioPorting('Porting/result/fastest_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 10+ & usage=Downloading/uploading video and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(4)`).click();
      cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(6)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Faster Fibre Speed Boost` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Fastest BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('contain','Best for you');
    });
    it('should not have Fast and Faster fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('not.contain','Best for you');
    });
  });
});

describe('Result Page - fastest broadband(<7Mb)- 10+ devices & all 6 activies selected', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioPorting('Porting/result/fastest_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 10+ & usage= all 6 selected and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(4)`).click();

      const devicesOptions= [1, 2, 3, 4, 5, 6];
      devicesOptions.forEach(option => {
        cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(${option})`).click();
      });
      //cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(6)`).click();
      cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
      cy.url().should('contain', 'result')
    });
    it('should get `Faster Fibre Speed Boost` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3) section').should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have `Best for you` text only for Fastest BB option', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('contain','Best for you');
    });
    it('should not have Fast and Faster fibre as best result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('not.contain','Best for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(2)').should('not.contain','Best for you');
    });
  });
});
