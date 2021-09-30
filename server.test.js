const { TestWatcher } = require("@jest/core");
const request = require("supertest");

const app = require("./server");

test("Get the home path", (done) => {
  request(app).get("/").expect(200, done);
});
