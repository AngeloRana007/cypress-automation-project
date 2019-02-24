describe('Result Page - faster broadband(<7Mb strongly recommended)- 1 device & Streaming Music', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine/result/faster_strongRec_best','', 'rightplan');
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
      //cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('contain','Not right for you');
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3)').should('not.contain','Best for you');
    });
    it('should have Fast product selection displaying Not right for you copy text', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1)').should('contain','Not right for you');
    });
    it('should have CSS font size 19px', function(){
      cy.get('#left-col-sticky-basket-spacer > div > availability-result > div:nth-child(2) > rprc-select-broadband-component > div > rprc-select-broadband:nth-child(1) > section > p.not-right-for-you.ng-scope > strong')
      .should('have.css', 'font-size')
      .and('equal', '19px');
    });
    it('should have CSS line height', function(){
      cy.get('#left-col-sticky-basket-spacer > div > availability-result > div:nth-child(2) > rprc-select-broadband-component > div > rprc-select-broadband:nth-child(1) > section > p.not-right-for-you.ng-scope > strong')
      .should('have.css', 'line-height')
      .and('equal', '18px');
    });

    it('should have CSS font color orange', function(){
      cy.get('#left-col-sticky-basket-spacer > div > availability-result > div:nth-child(2) > rprc-select-broadband-component > div > rprc-select-broadband:nth-child(1) > section > p.not-right-for-you.ng-scope > strong')
      .should('have.css', 'color')
      .and('equal', 'rgb(236, 105, 8)');
    });

    it('should have CSS font-family Open Sans, Arial', function(){
      cy.get('#left-col-sticky-basket-spacer > div > availability-result > div:nth-child(2) > rprc-select-broadband-component > div > rprc-select-broadband:nth-child(1) > section > p.not-right-for-you.ng-scope > strong')
      .should('have.css', 'font-family')
      .and('equal', '"Open Sans", Arial');
    });
//"Open Sans", Arial
it('should have CSS text-align center', function(){
  cy.get('#left-col-sticky-basket-spacer > div > availability-result > div:nth-child(2) > rprc-select-broadband-component > div > rprc-select-broadband:nth-child(1) > section > p.not-right-for-you.ng-scope > strong')
  .should('have.css', 'text-align')
  .and('equal', 'center');
});

  });
});
