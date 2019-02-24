describe('Result Page - faster broadband(<7Mb strongly recommended)- 1 device & Streaming Music', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioNewLine('NewLine/result/faster_strongRec_best','', 'rightplan');
    //cy.wait('@postCall');
    /*cy.loadScenarioNewLine('','', 'home/v');
    cy.get('section > cta-button > p > a').click();
    cy.get("input[name='postcode']").type('W11 4AR')
    cy.get("input[name='phoneNumber']").type('01020820180');
    cy.get('#confirmOrderButton-id').click().end();*/
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
    it('should have Strongly recommended lead copy text', function(){
      cy.contains('Strongly recommended');
      cy.contains('Our Faster Fibre Broadband plan ticks all the boxes and has the speed you need, given what');
    });
  });
context('When user selects fast product', function(){
    it('should get `Fast` as pre-selected result', function(){
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1) section')
      .click();
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(1) section')
      .should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
    it('should have This plan is not suitable for your needs lead copy text', function(){
      cy.contains('This plan is not suitable for your needs');
      cy.contains('Unfortunately your line speed will be too slow on this plan which could lead to issues such as buffering, slow website browsing and slow downloads. We highly recommend upgrading to  the best plan for you, Faster Fibre');
    });
  });


  context('When user selects fast+ boost product', function(){
    it('should get `Fast + boost` as pre-selected result', function(){
      cy.server();
      cy.route('POST', "https://yor-sales-promotion.infosys-18.nec.talkdev.co.uk/sales-api/basket/upsell-package", `fixture:NewLine/result/faster_strongRec_best/upsell-package_boost.json`).as('upsellpckg');

      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3) section')
      .click();
      cy.get('.rprcSelectBroadbandContainer rprc-select-broadband:nth-child(3) section')
      .should('have.class','rprcSelectBroadband Select-Broadband-Segment selected');
    });
  /*  it('should have correct lead copy text', function(){

      cy.contains('Superfast speeds for super busy homes');
      //cy.contains('Want an extra boost of speed? Do more online, on more devices, all at the same time, with our fastest plan available to you');
    });*/
  });
});
