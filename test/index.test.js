const request = require('supertest');
const app = require('../src/index'); // Import the app instance

describe('GET /', () => {
  let server;

  before((done) => {
    server = app.listen(3001, (err) => {
      if (err) return done(err);
      done();
    }); // Start the server on a different port for testing
  });

  after((done) => {
    if (server) {
      server.close(done); // Close the server after tests
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