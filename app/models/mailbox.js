// Mailbox model
// =============

var attr = DS.attr,
    hasMany = DS.hasMany;

var Mailbox = DS.Model.extend({
  number: attr(),
  name: attr(),
  messages: hasMany('message')
});

Mailbox.idField = 'number';

export default Mailbox;
