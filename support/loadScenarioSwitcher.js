Cypress.Commands.add("loadScenarioSwitcher",(scenario, variant, pageUrl) => {
  return cy.server().then(() => {
    //list of domains (stubs and CMS)
    const baseUrl = 'https://local.gen7.talkdev.co.uk:9000';
    const domain1 = `${baseUrl}/stubs/default`;
    const domain2 = 'https://m0.ttxm.co.uk/gen7/navigation';
    const domain3 = `${baseUrl}/cms/faqs/brochureware`;
    // webserver domains
    //const salesApi = 'https://npt-sales-bssaip.trio-2.nec.talkdev.co.uk/sales-api';
    const salesApi = 'https://yor-sales-promotion.infosys-18.nec.talkdev.co.uk/sales-api';
    const awsDomain = 'https://qzpeso8hle.execute-api.eu-west-1.amazonaws.com';
    const contentful =  'https://cdn.contentful.com/spaces';
    //list of EndPoint Urls
    var endPoint1= `${domain1}/outage.json`;
    var endPoint2= `${domain1}/user/profile/get-customer-selection.json`;
    var endPoint3= `${domain2}/header.json`;
    //var endPoint4= `${domain2}/footer.json?1516964199772`;
    var endPoint6= `${domain3}/fast-tv.json`;
    var endPoint7= `${baseUrl}/sockjs-node/info?t=1516964199866`;
    var endPoint8= `${baseUrl}/cms/default_content/products/fast.json`;
    //var endPoint8_1= `${baseUrl}/cms/default_content/products/faster.json`;
    var endPoint9= `${baseUrl}/cms/default_content/affiliates/tt-organic.json`;
    var endPoint10= `${baseUrl}/cms/default_content/pages/fast.json`;
    var endPoint11= `${domain3}/fast.json`;
    var endPoint5= `${salesApi}/basket/get`;
    var endPoint12= `${salesApi}/product?portalId=tt-organic`;
    var endPoint13= `${salesApi}/product?lineType=&portalId=tt-organic`;

    var endPoint14= `${salesApi}/smallprint`;
    var endPoint15= `${salesApi}/reset-package`;
    var endPoint16= `${salesApi}/availability-check/set-package`;
    var endPoint17= `${salesApi}/availability-check/check-porting`;
    var endPoint18= `${salesApi}/package-results`;
    var endPoint19= `${salesApi}/basket/upsell-package`;
    //var endPoint20= `${awsDomain}/prod/speed-recommendation?devices=6&fibreSpeed=20&speed=6.0&usage=browsing`;
    var endPoint21= `${salesApi}/basket/update`;
    var endPoint22= `${salesApi}/checkout-step`;

    //routing stubs apis as cy.route(method, endPoint Url , fixture);
    cy.route('GET', endPoint1, `fixture:${scenario}/outage.json`);
    cy.route('GET', endPoint2, `fixture:${scenario}/get-customer-selection.json`);
    cy.route('GET', endPoint3, `fixture:${scenario}/header.json`);
    cy.route('GET', `${domain2}/**`, `fixture:${scenario}/footer.json`);
    cy.route('POST', "https://insights.hotjar.com/api/v1/client/sites/432446/visit-data?sv=5", {user_id: "e66d2fab8-0106-3946-94e1-2b01942b58cd", success: true}).as('postCall');

    // stubs endpoints
    cy.route('GET', endPoint6, `fixture:${scenario}/fast-tv.json`);
    cy.route('GET', `${baseUrl}/sockjs-node/**`, `fixture:${scenario}/info.json`);
    cy.route('GET', endPoint8, `fixture:${scenario}/fast.json`).as('fast');
    cy.route('GET', `${baseUrl}/cms/faqs/brochureware/faster.json`, `fixture:${scenario}/faster.json`);
    cy.route('GET', `${baseUrl}/cms/default_content/products/faster.json`, `fixture:${scenario}/cms_faster.json`)
    cy.route('GET', endPoint9, `fixture:${scenario}/tt-organic.json`).as('cms_tt-organic');
    cy.route('GET', endPoint10, `fixture:${scenario}/pagesfast.json`);
    cy.route('GET', endPoint11, `fixture:${scenario}/brochurewarefast.json`);
    // backend endpoints
    cy.route('GET', endPoint12, `fixture:${scenario}/productportaldId.json`);
    cy.route('GET', endPoint13, `fixture:${scenario}/productlineType.json`).as('productlineType');
    cy.route('POST', endPoint14, `fixture:${scenario}/smallprint.json`);
    cy.route('GET', endPoint15, `fixture:${scenario}/reset-package.json`);
    cy.route('POST', endPoint16, `fixture:${scenario}/set-package.json`);
    cy.route('POST', endPoint17, `fixture:${scenario}/check-porting.json`).as('checkporting');
    cy.route('GET', endPoint5, `fixture:${scenario}/get.json`).as('getBasket');
    cy.route('POST', endPoint18, `fixture:${scenario}/package-results.json`).as('packageResults');
    cy.route('POST', endPoint19, `fixture:${scenario}/upsell-package.json`).as('upsellpkg');
    cy.route('GET',`${awsDomain}/prod/**` , `fixture:${scenario}/speed-recommendation.json`).as('speed recommendation');
    cy.route('POST', endPoint21, `fixture:${scenario}/update.json`).as('updateBasket');
    cy.route('GET', endPoint22, `fixture:${scenario}/checkout-step.json`);
    cy.route('GET',`${contentful}/0zd818fqktdq/entries?include=10&sys.id=40uNiSfSnYAKIiOSAywAYk`, `fixture:${scenario}/entries1.json`);
    cy.route('GET',`${contentful}/0zd818fqktdq/entries?include=10&content_type=shopProduct`, `fixture:${scenario}/entries2.json`);
    cy.route('GET',`${contentful}/0zd818fqktdq/entries?include=0&content_type=page&fields.path=home%2Fv`, `fixture:${scenario}/entries3.json`);
    //cy.route('GET', `${baseUrl}/scenarios.json`, `fixture:${scenario}/scenarios.json`); 
    cy.route('GET', `${baseUrl}/cms/api/static.json`, `fixture:${scenario}/static.json`)

    //cms/api/static.json
  }).then(() => {
    return cy.visit('/test').get('environment-changer select').select('RPRC').wait(2000).get("environment-overlay strong.ng-binding").should('have','RPRC');

  }).then(() => {
    return cy.visit(pageUrl).then(variant => {
      switch (variant) {
        case 'variant':
        cy.window().then((win) => {
          win.localStorage.variant= true;
        });
        default:
        cy.window().then((win) => {
          win.localStorage.RPRC4 = true;
          console.log(win.localStorage.RPRC4);
          //localStorage.RPRC4 = true
        });
      };
    });
  })
  /*  .then(() => {
  return cy.reload();

});*/
});
