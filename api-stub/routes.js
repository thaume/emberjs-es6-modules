module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  server.namespace('/api', function() {

		// Return fixture data for '/api/posts/:id'
		server.get('/mailboxes/', function(req, res) {

			var data = {
				"mailboxes": [{
			    "name": "Inbox",
			    "id": "inbox",
			    "messages": ["1", "2"]
			  }, {
			    "name": "Spam",
			    "id": "spam",
			    "messages": ["3"]
			  }, {
			    "name": "Sent Mail",
			    "id": "sent-mail",
			    "messages": ["4"]
			  }],
				"messages": [{
	        "id": 1,
	        "subject": "Welcome to Ember",
	        "from": "tomster@emberjs.com",
	        "to": "user@example.com",
	        "date": new Date(),
	        "body": "Welcome to Ember. We hope you enjoy your stay"
	      }, {
	        "id": 2,
	        "subject": "Great Ember Resources",
	        "from": "tomster@emberjs.com",
	        "to": "user@example.com",
	        "date": new Date(),
	        "body": "Have you seen embercasts.com? How about emberaddons.com?"
	      },
	      {
	        "id": 3,
	        "subject": "You have one the lottery!!!111ONEONE",
	        "from": "419@thereallotteryhonest.com",
	        "to": "user@example.com",
	        "date": new Date(),
	        "body": "You have ONE the lottery! You only have to send us a small amount of monies to claim your prize"
	      },
	      {
	        "id": 4,
	        "subject": "Should I use Ember",
	        "from": "user@example.com",
	        "to": "tomster@emberjs.com",
	        "date": new Date(),
	        "body": "Ember looks pretty good, should I use it?"
	      }]
			};

			res.send(data);
		});

	});

};
