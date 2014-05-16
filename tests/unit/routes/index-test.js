import { test, moduleFor } from 'ember-qunit';

import Index from 'appkit/routes/application';

moduleFor('route:application', "Unit - IndexRoute");

test("it exists", function(){
  ok(this.subject() instanceof Index);
});
