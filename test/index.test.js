const request = require('supertest');
const app = require('../src/index'); 

describe('GET /', () => {
  let server;

  before((done) => {
    server = app.listen(3001, (err) => {
      if (err) return done(err);
      done();
    }); 
  });

  after((done) => {
    if (server) {
      server.close(done); 
    } else {
      done();
    }
  });

  it('should return Hello World', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .expect('Hello World!', done);
  });
});