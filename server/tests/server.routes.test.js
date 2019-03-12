var should = require('should'),
    request = require('supertest'),
    express = require('../config/express');

describe('Listings CRUD tests', function() {
  this.timeout(10000);

  before(function(done) {
    app = express.init();
    agent = request.agent(app);

    done();
  });

  it('should be able to retrieve all cards', function(done) {
    agent.get('/api/cards')
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        done();
      });
  });
});
