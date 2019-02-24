describe('Result Page - faster broadband(<7Mb)- 1 device & Streaming Music', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioSwitcher('Switcher/result/faster_strongRec_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 1 & usage=Streaming Music and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(1)`).click();
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

describe('Result Page - faster broadband(<7Mb)- 1 device & Video Calls', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioSwitcher('Switcher/result/faster_strongRec_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 1 & usage=Video Calls and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(1)`).click();
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

describe('Result Page - faster broadband(<7Mb)- 1 device & Streaming Video', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioSwitcher('Switcher/result/faster_strongRec_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 1 & usage=Streaming Video and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(1)`).click();
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

describe('Result Page - faster broadband(<7Mb)- 1 device & Online Gaming', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioSwitcher('Switcher/result/faster_strongRec_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 1 & usage=Online Gaming and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(1)`).click();
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

describe('Result Page - faster broadband(<7Mb)- 1 device & Downloading/uploading video', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioSwitcher('Switcher/result/faster_strongRec_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 1 & usage=Downloading/uploading video and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(1)`).click();
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

describe('Result Page - faster broadband(<7Mb)- 1 device & all 6 activies selected', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioSwitcher('Switcher/result/faster_strongRec_best','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user selects devices = 1 & usage= all 6 selected and then click on the check options button', function(){
    it('should navigate to result page', function(){
      cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(1)`).click();

      const devicesOptions= [1, 2, 3, 4, 5, 6];
      devicesOptions.forEach(option => {
        cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(${option})`).click();
      });
      //cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(6)`).click();
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
