# Cypress - E2E Automation framework
Approach and strategies to build automation tests within the Development Life cycle:

# 1. Cypress configuration:

- When a project is added to Cypress, a cypress.json file is created in the project. This file is used to store any configuration values we supply.

- Package.json file
We had to add a scripts in package.json for running Cypress for command line

"scripts": {
"cypress": "cypress open",
"e2e-RPRC": "cypress run --project ./src/experiments",
"make-component": "sh ./scripts/make-component/start.sh"
},

# 2. Cypress branch, sales instances and test environments

- Test instances: an ad-hoc cypress branch has been created with feature/RPRC :  all commits have been merged into feature/RPRC-cypress branch.

- Test environments and Webserver domain instances used:
baseUrl = 'https://local.gen7.talkdev.co.uk:9000';
domain1 = 'https://m0.ttxm.co.uk/gen7/navigation';
domain2 = `${baseUrl}/cms/faqs/brochureware`;

- Env. salesApi = 'https://npt-sales-bssaip.trio-2.nec.talkdev.co.uk/sales-api';
awsDomain = 'https://qzpeso8hle.execute-api.eu-west-1.amazonaws.com';
contentful domain= 'https://cdn.contentful.com/spaces';


# 3. Test strategies: stubbing out backend calls/Not stubbing APIs responses for Critical Paths.

- Benefits
Easy control of response bodies, status, and headers
Can force responses to take longer to simulate network delay
No code changes to your server or client code
Fast, < 20ms response times

- Downsides
No guarantee your stubbed responses match the actual data the server sends
No test coverage on some server endpoints
Not as useful if you’re using traditional server side HTML rendering



# 4. Test Approach
Three layers testing: 1. real APIs test automation, 2. E2E/feature tests with stubbed APIs, 3. Smoke tests to run in CI/Chrono Jobs

- Test Cases/ Scenarios have been created based on routing backend calls and by fetching stubbed data through FE: (i.e. via cy.serve(), cy.routing() cypress functions)
- New Cypress commands have been created in order to load stubbed APIs based on different test suite (i.e. Newline, Porting, Switching...) and test cases (i.e. availability check page, results page ...)
- local.storage parameters have been taken in consideration in stubbing APIs and response delays if opportune
- out of scope: Cross browser testing (Cypress runs only on canary/chrome/electron), real APIs testing (in final stage we may create - -critical Path - E2E tests to smoke-test the real web server behaviour)

# 5. Stubbing backend responses
We need to stub response and control the body, status, headers and delay if needed.

- To begin stubbing responses:
Start a cy.server()
Provide a cy.route()
cy.server() enables stubbing, while cy.route() provides a routing table so Cypress understands which response should go with which request.

- XHR Requests
Cypress automatically indicates when an XHR request happens. These will be always logged in the Command Log.

# 6. Routing and Fixtures

- Once we start a server with cy.server(), all requests will be controllable for the remainder of the test. When a new test runs, Cypress will restore the default behavior and remove all routing and stubbing. 
- A fixture, instead, is a fixed set of data located in a file that is used in our tests. In our case, when stubbing a response we will manage JSON objects. Cypress integrates fixture syntax directly into responses as below:
// Routing format cy.route({ method:'GET', endpoint Url, 'fixture:api.json', response[body, status, headers, delay]})

# 7. Create a Command for Load Scenarios
- we had to overwrite commands in cypress/support/commands.js file repo, since it is loaded before any test files are evaluated via an import statement in cypress/support/index.js.:
// Command format Cypress.Commands.add("loadScenario",(scenario, variant, pageUrl) => { 
//list of domains 
//list of "availability" EndPoint Urls
 //routing stubs apis as cy.route(method, endPoint Url , fixture, body); 
//other functions: ex. scenarioFolder, variant, localstorage settings 
});

# 8. Test Structure BDD format

- Cypress is built on top of Mocha and Chai and we will support both Chai’s BDD and TDD assertion styles. Tests we will write will mostly adhere to this style as below:

describe('Availibility Check Page', function () {
before(function (){
console.log('Load Scenario and pre-settings will runs once before a Test Suite...');
cy.loadScenario('scenario folder',variant, page Url);
// importing loadScenario command cy.wait(@anyApiCalls);
// page load will wait for XHR calls });
beforeEach(function(){
console.log('settings before each test') })
context('When user navigates to availability page for a Switcher', function(){
it('should not have a postcode field',function(){
console.log('test starting...');
//some functions //assertions code})
it('should have not have a cli field', function(){
// some functions
// assertions code}});

# Further Considerations

- SDLC and test activities, i.e. how to change test approach (i.e. QAs writing Acceptance criteria for every ticket, QAs review spec requirements and adding negative scenarios in BDD format, writing automated tests in development stage => find bugs earlier before QAing),
- Cross Browser testing, Test pyramid: Unit vs Integration vs E2E, how to involve Devs in test activities.
- CI/CD Integration/pipelines/Gitlab vs Github (CircleCI)
- Alternatives: cucumber+Protractor, Nightwatch, Phantom, Casper
- Test Approach: 3 layers test coverage: 
a) Real APIs test automation: Postman and Newman integration
b) E2E/feature tests with stubbed APIs
c) Smoke tests to run in CI/Chrono Jobs








