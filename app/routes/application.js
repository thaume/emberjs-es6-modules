// Application route
// ==================

import Mailbox from 'appkit/models/mailbox';

var ApplicationRoute = Em.Route.extend({
  model: function() {
    return Mailbox.find();
  }
});

export default ApplicationRoute;
