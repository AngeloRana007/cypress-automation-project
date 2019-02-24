describe('Product Page components - Porting <7Mb ', function () {
  beforeEach(function () {
    console.log('Load Scenario...');
    cy.loadScenarioPorting('Porting/product','', 'home/v');
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
  context('When user navigates to product page for a Porting', function(){
    it('should have an Unlimited Broadband offer', function(){
      console.log('test starting...');
      cy.get('.rprcProductCard row').should('have','Unlimited Broadband');
    });
    it('should have an Unlimited Fibre Broadband', function(){
      cy.get('.getRightPlan').should('have','Unlimited Fibre Broadband');
    })
    it('should have a get started button', function(){
      cy.get('section.productCardContainer').should('contain','Get started');
    });
  })
})
