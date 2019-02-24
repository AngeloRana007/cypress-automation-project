describe('Right plan page - Switcher<7Mb', function () {
  before(function () {
    console.log('Load Scenario...');
    cy.loadScenarioSwitcher('Switcher/rightplan','', 'rightplan');
    //cy.wait('@postCall');
  });
  context('When user navigates to rightplan page for a Switcher scenario', function(){

    it('should contain the header title', function(){
      cy.get('h1').should('contain', `Ok, let's help you get the right plan`);
    });

    it('should have the radio buttons for devices options', function(){
      cy.get('.rprcRadioButtonContainer.rprc_users').should('exist');
    });
    it('should have the radio buttons for activities', function(){
      cy.get('.rprcRadioButtonContainer.rprc_activities').should('exist');
    });
    it('should have a get plan options button', function(){
      cy.get('#confirmOrderButton-id').should('have','Get plan options');
    });
    it('should have the first question about devices displayed correctly', function(){
      cy.contains('How many devices connect to the internet at busy times in your home?');
    });
    it('should have the second question about activities displayed correctly', function(){
      cy.contains('What activities does your home do most online?');
    });
    it('should have the - What does this mean? - link for the first question', function(){
      cy.get('form.ng-pristine.ng-valid >div:nth-of-type(1)').should('exist');
    });

    it('should open up the - What does this mean? and have a correct text', function(){
      cy.get('form.ng-pristine.ng-valid >div:nth-of-type(1) a').click();
      cy.get('.supporting.ng-isolate-scope.supporting--open:nth-of-type(1)').should('contain', 'Your home’s broadband speed is shared amongst everyone’s connected devices, so the more devices you have, the higher the speed you’ll need to enjoy a great experience.');
    });

    it('should have the - What does this mean? - link for the second question', function(){
      cy.get('form.ng-pristine.ng-valid >div:nth-of-type(4)').should('exist');
    });

    it('should open up the - What does this mean? and have a correct text', function(){
      cy.get('form.ng-pristine.ng-valid >div:nth-of-type(4) a').click();
      cy.get('#content > rprc > form > div:nth-child(7)').should('contain', 'Each online activity requires some of your home’s broadband speed to work. So if you have lots of devices, doing lots of things online, all at the same time, the higher the speed you’ll need to enjoy a great experience.');
    });


    describe('When click on get plan options without select any option', () => {
      it('should be displayed an error notification on the top header', function(){
        cy.get('#confirmOrderButton-id').should('have','Get plan options').click();
        cy.get('.form-errors.notification.ng-isolate-scope.notification--error').should('be.visible');
      });

      it('should be displayed error messages', function(){
        cy.get('.form-errors.notification.ng-isolate-scope.notification--error').should('contain','Please confirm how many devices you use at busy times').
        and('contain','Please confirm at least one activity your household uses the internet for');
      });
    });
    describe('When clicking on a device radio button', () => {
      const devicesOptions= [1, 2, 3, 4];
      devicesOptions.forEach(option => {
        it(('should be selected the radio button: ' + option), () => {
          cy.get(`.rprcRadioButtonContainer.rprc_users rprc-radio-button:nth-child(${option})`).click();
        });
      });
      it('should have the last button selected now', function(){
        cy.get('.rprcRadioButtonContainer.rprc_users rprc-radio-button:last-child>div').should('have.class', 'selected');
      });

    });
    describe('When tick on an activity option', () => {
      const devicesOptions= [1, 2, 3, 4, 5, 6];
      devicesOptions.forEach(option => {
        it(('Should select the activity:' + option), () => {
          cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(${option})`).click();
        });
      });
    });
    describe('When tick off an activity option', () => {
      const devicesOptions= [1, 2, 3, 4, 5, 6];
      devicesOptions.forEach(option => {
        it(('Should unselect the activity:' + option), () => {
          cy.get(`.rprcRadioButtonContainer.rprc_activities rprc-radio-button:nth-child(${option})`).click();
        });
      });
    });


  });
});
