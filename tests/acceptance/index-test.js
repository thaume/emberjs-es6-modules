var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('index renders', function(){
  expect(2);

  stubAjax('/api/mailboxes', fixturesAjax);

  visit('/');
  andThen(function(){
    var title = find('h1');
    var list = find('ul li');

    console.log('title: ', title);

    equal(title.text(), 'TomsterMail');

    equal(list.length, 4);
  });
});

var fixturesAjax = {
  "mailboxes": [
    {
      "name": "Inbox",
      "id": "inbox",
      "messages": [
        "1",
        "2"
      ]
    },
    {
      "name": "Spam",
      "id": "spam",
      "messages": [
        "3"
      ]
    },
    {
      "name": "Sent Mail",
      "id": "sent-mail",
      "messages": [
        "4"
      ]
    }
  ],
  "messages": [
    {
      "id": 1,
      "subject": "Welcome to Ember",
      "from": "tomster@emberjs.com",
      "to": "user@example.com",
      "date": "2014-05-16T15:47:55.259Z",
      "body": "Welcome to Ember. We hope you enjoy your stay"
    },
    {
      "id": 2,
      "subject": "Great Ember Resources",
      "from": "tomster@emberjs.com",
      "to": "user@example.com",
      "date": "2014-05-16T15:47:55.259Z",
      "body": "Have you seen embercasts.com? How about emberaddons.com?"
    },
    {
      "id": 3,
      "subject": "You have one the lottery!!!111ONEONE",
      "from": "419@thereallotteryhonest.com",
      "to": "user@example.com",
      "date": "2014-05-16T15:47:55.259Z",
      "body": "You have ONE the lottery! You only have to send us a small amount of monies to claim your prize"
    },
    {
      "id": 4,
      "subject": "Should I use Ember",
      "from": "user@example.com",
      "to": "tomster@emberjs.com",
      "date": "2014-05-16T15:47:55.259Z",
      "body": "Ember looks pretty good, should I use it?"
    }
  ]
};
