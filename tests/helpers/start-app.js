import Application from 'appkit/app';

function startApp(attrs) {
  var App;

  var attributes = Ember.merge({
    // useful Test defaults
    rootElement: '#ember-testing',
    LOG_ACTIVE_GENERATION:false,
    LOG_VIEW_LOOKUPS: false
  }, attrs); // but you can override;

  Ember.run(function(){
    App = Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
    // Setup mocha
    mocha.globals(['Ember', 'DS', 'App', 'MD5', 'server', 'expect']);
    mocha.timeout(5);
    // Setup Chai
    chai.Assertion.includeStack = true;
    window.expect = chai.expect;
    // Setup Sinon
    server = sinon.fakeServer.create();
  });

  App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

  return App;
}

export default startApp;
