describe('Product Page components - Switcher<7Mb', function () {
  beforeEach(function () {
    console.log('Load Scenario...');
    cy.loadScenarioSwitcher('Switcher/product','', 'home/v');
    //cy.wait('@postCall');
  });
  context('When user clicks on get started button', function(){
    it('should be able to navigate to availability page and check postcode and cli fields', function(){
      cy.get('section > cta-button > p > a').click().then(() => {
        cy.wait(3000)
        cy.url().should('contain','availability');
        //cy.go('back');
      });
    });
  });
  context('When user navigates to product page for a Switcher', function(){
    it('should have an Unlimited Broadband offer', function(){
      console.log('test starting...');
      cy.get('.rprcProductCard row').should('have','Unlimited Broadband');
    });
    it('should have an Unlimited Fibre Broadband', function(){
      cy.get('.getRightPlan').should('have','Unlimited Fibre Broadband');
    })
    it('should have a get started button', function(){
      cy.get('section > cta-button > p > a').should('contain','Get started');
    });
  });
})
/*

describe('Product Page navigation - Switcher', function () {
  beforeEach(function () {
    console.log('Load Scenario...');
    cy.loadScenarioSwitcher('Switcher/product','', 'home/v');
    //cy.wait('@postCall');
  });
  context('When user clicks on Find out more links', function(){
    it('should be able to navigate to Unlimited BB page', function(){
      cy.get("[href='http://www.talktalk.co.uk/shop/broadband/v']").should('contain','Find out more');
      //.click();
      //cy.url().should('contain','broadband');
    });
    it('should be able to navigate to Unlimited Fibre page', function(){
      cy.get("[href='http://www.talktalk.co.uk/shop/broadband/fibre/v']").should('contain','Find out more');
      //.click();
      //cy.url().should('contain', 'fibre');
    });
  });
})*/
