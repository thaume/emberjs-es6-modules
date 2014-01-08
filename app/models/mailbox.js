// Mailbox model
// =============

var attr = DS.attr,
    hasMany = DS.hasMany;

var Post = DS.Model.extend({
  number: attr(),
  name: attr(),
  messages: hasMany('email')
});

Post.idField = 'number';

export default Post;
