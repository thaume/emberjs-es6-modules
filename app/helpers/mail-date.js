// Date helper
// ===========

export default Ember.Handlebars.makeBoundHelper(function(date) {
  return moment(date).format('MMM Do');
});
