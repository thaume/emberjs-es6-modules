// Mail route
// ==========

import Mailbox from 'appkit/models/mailbox';

var MailRoute = Em.Route.extend({
  model: function(params) {
    return this.modelFor('mailbox').messages.findBy('id', params.message_id);
  }
});

export default MailRoute;
