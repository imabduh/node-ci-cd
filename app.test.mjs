import request from "supertest";
import app from "./app.js";
import { expect } from "chai"; 
describe("GET /", () => {
  it("responds with Hello, World!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).to.equal(200);
    expect(res.text).to.equal("Hello, World!");
  });
});
