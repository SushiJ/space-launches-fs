import request from "supertest";
import app from "../src/app";

describe("Test GET /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/launches");
    expect(response.status).toBe(200);
  });
});

describe("Test POST /launch", () => {
  test("It should respond with 200 success", () => {});

  test("It should catch missing required properties", () => {});
  test("It should catch invalid dates", () => {});
});
