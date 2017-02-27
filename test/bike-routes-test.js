'use strict';

const request = require('superagent');
const expect = require('chai').expect;
// const chaiHTTP = require('chai-http');

require(`${__dirname}/../server.js`);

describe('Bike Routes Module', function() {
  let testBike = [];
  describe('POST: 3000/api/bike', function() {
    it('should post a bike to a new file', function(done) {
      request.post('localhost:3000/api/bike')
      .send({ brand: 'Rodriguez', type: 'Cyclocross'})
      .end((err, res) => {
        if(err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.brand).to.equal('Rodriguez');
        expect(res.body.type).to.equal('Cyclocross');
        testBike = res.body;
        done();
      });
    });
  });
});
