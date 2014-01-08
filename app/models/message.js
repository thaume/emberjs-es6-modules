// Message model
// =============

var attr = DS.attr;

var Message = DS.Model.extend({
  number: attr(),
  subject: attr(),
  from: attr(),
  to: attr(),
  date: attr(),
  body: attr()
});

Message.idField = 'number';

export default Message;
