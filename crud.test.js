const { TestWatcher } = require("@jest/core");
const request = require("supertest");
const app = require("./server");

test("Check post in link", (done) => {
  request(app).post("/link").expect(200, "Hey listen", done);
});

test("Check put", (done) => {
  request(app).put("/puttasinte").expect(200, "Du puttades!", done);
});

test("Check get cat", (done) => {
  request(app).get("/cat").expect(200, "Meow!", done);
});

test("Check delete", (done) => {
  request(app).delete("/hejhej").expect(200, "Nu är du deletad!", done);
});

test("Check summation", (done) => {
  request(app).get(`/api/sum/${1}/plus/${1}`).expect(200, { result: 2 }, done);
});
