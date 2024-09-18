const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/index"); // Import the app instance

chai.use(chaiHttp);
const expect = chai.expect;

describe("GET /", () => {
  let server;

  before((done) => {
    server = app.listen(3001, done); // Start the server on a different port for testing
  });

  after((done) => {
    server.close(done); // Close the server after tests
  });

  // it("should return Hello World", (done) => {
  //   chai
  //     .request(server)
  //     .get("/")
  //     .end((err, res) => {
  //       expect(res).to.have.status(200);
  //       expect(res.text).to.equal("Hello World!");
  //       done();
  //     });
  // });

  it("should fail by returning Goodbye World", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        // expect(res).to.have.status(200);
        expect(res.text).to.equal("Goodbye World!"); // This will fail
        done();
      });
  });
});
