// Email model
// =============

var attr = DS.attr;

var Comment = DS.Model.extend({
  number: attr(),
  subject: attr(),
  from: attr(),
  to: attr(),
  date: attr(),
  body: attr()
});

Comment.idField = 'number';

export default Comment;
