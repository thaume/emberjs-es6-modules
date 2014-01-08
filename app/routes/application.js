// Application route
// ==================

var ApplicationRoute = Em.Route.extend({
  model: function() {
    return this.store.find('mailbox');
  }
});

export default ApplicationRoute;
