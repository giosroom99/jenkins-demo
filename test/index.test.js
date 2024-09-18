const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index'); // Assuming you export the app in src/index.js

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /', () => {
  it('should return Hello World', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World!');
        done();
      });
  });

  it('should fail by returning Goodbye World', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Goodbye World!'); // This will fail
        done();
      });
  });
});